var express = require("express");
var router = express.Router();
var bCrypt = require("bcrypt-nodejs");
var passport = require("passport");
var svgCaptcha = require("svg-captcha");
var stringSimilarity = require("string-similarity");
var User = require("../models/user");
var rCaptcha = require("../models/regcaptcha");
var Inventory = require("../models/inventory");
var Receiving = require("../models/receiving");
var Orders = require("../models/order");
const jwt = require("jsonwebtoken");
// const requireAuth = passport.authenticate("jwt", { session: false });
const requireAuth = require("../middleware/decodeUser");
var crypto = require("crypto");
var fs = require("fs");
const controller = require("../controller/inventory");
const authorize = require("../helper/authorize");
const Role = require("../helper/roles");

function getDetailInventory(id, callback) {
  Inventory.findOne({ _id: id }, function(err, res) {
    // In ca  se of any error, return using the done method.
    if (err) {
      return err;
    } else {
      callback(err, res);
    }
  });
}

function countInventoryByCategory(product_category, callback) {
  console.log(product_category);
  Inventory.countDocuments({ product_category: product_category }, function(
    err,
    res
  ) {
    if (err) {
      return err;
    }
    console.log("The count " + res);
    callback(err, res);
  });
}

function searchByKeyword(query, callback) {
  // let queries = {};
  // queries.skip = size * (pageNo - 1);
  // queries.limit = size;
  console.log(query);
  Inventory.find(
    {
      $text: {
        $search: query
      }
    },

    function(err, result) {
      if (err) {
        return err;
      }
      console.log("The result " + result);
      callback(err, res);
    }
  );
}

function getInventoryByCategory(searchKey, value, size, pageNo, callback) {
  let query = {};

  query.skip = size * (pageNo - 1);
  query.limit = size;
  console.log(query, { [searchKey]: searchKey });
  return Inventory.find({ [searchKey]: value }, {}, query, function(err, res) {
    // In case of any error, return using the done method.
    if (err) {
      return err;
    } else {
      console.log("SS");
    }
    callback(err, res);
  });
}
function getInventoryByName(product_name, size, pageNo, callback) {
  let query = {};

  query.skip = size * (pageNo - 1);
  query.limit = size;
  console.log(query);
  return Inventory.find({ product_name }, {}, query, function(err, res) {
    // In case of any error, return using the done method.
    if (err) {
      return err;
    } else {
      console.log("SS");
    }
    callback(err, res);
  });
}

function getInventoryAll(limit, callback) {
  Inventory.find({}, function(err, res) {
    // In case of any error, return using the done method.
    if (err) {
      return err;
    } else {
      callback(err, res);
    }
  });
}

function getInventoryByCartAndSort(c, s, l, callback) {
  Inventory.find({ product_category: c }, { skip: s, limit: l }, function(
    err,
    res
  ) {
    // In case of any error, return using the done method.
    if (err) {
      return err;
    } else {
      console.log(res);
    }
    callback(err, res);
  });
}

function getOneAndUpdateInventory(
  id,
  product_name,
  product_description,
  product_category,
  product_price,
  stock_number,
  delivery_date,
  total_stock,
  item_supplier,
  supplier_name,
  supplier_email,
  supplier_number,
  is_available,
  callback
) {
  Inventory.findOneAndUpdate(
    { _id: id },
    {
      $set: {
        product_name: product_name,
        product_description: product_description,
        product_category: product_category,
        product_price: product_price,
        stock_number: stock_number,
        delivery_date: delivery_date,
        total_stock: total_stock,
        item_supplier: item_supplier,
        supplier_name: supplier_name,
        supplier_email: supplier_email,
        supplier_number: supplier_number,
        is_available: is_available
      }
    },
    { upsert: true, new: true },
    function(err, res) {
      if (err) {
        return err;
      } else {
        callback(err, res);
      }
    }
  );
}

function deleteInventory(stock_number, callback) {
  Inventory.findOneAndRemove({ _id: stock_number }, function(err, result) {
    if (err) {
      return err;
    } else {
      callback(err, result);
    }
  });
}

function getDetailOrder(id, callback) {
  Orders.findOne({ _id: id }, function(err, res) {
    // In case of any error, return using the done method.
    if (err) {
      return err;
    } else {
      callback(err, res);
    }
  });
}

function getOrderByStatus(order_status, callback) {
  Orders.find({ order_status: order_status }, function(err, res) {
    // In case of any error, return using the done method.
    if (err) {
      return err;
    } else {
      console.log("SS");
    }
    callback(err, res);
  });
}

function getDeliveries(inventory_id, callback) {
  Receiving.find({ inventory_id: inventory_id }, function(err, res) {
    // In case of any error, return using the done method.
    if (err) {
      return err;
    } else {
      console.log("Getting Deliveries");
    }
    callback(err, res);
  });
}

function deleteOrder(id, callback) {
  Order.findOneAndRemove({ _id: id }, function(err, result) {
    if (err) {
      return err;
    } else {
      callback(err, result);
    }
  });
}

//Create product
router.post("/insert", function(req, res) {
  try {
    // var user = req.user.username;
    // console.log("Username :", user);
    // console.log("Req body", req.body);
    var newInventory = new Inventory();
    newInventory.product_name = req.body.product_name;
    newInventory.product_description = req.body.product_description;
    newInventory.product_category = req.body.product_category;
    newInventory.product_price = req.body.product_price;
    newInventory.stock_number = req.body.stock_number;
    newInventory.item_supplier = req.item_supplier;
    newInventory.supplier_name = req.body.supplier_name;
    newInventory.supplier_email = req.body.supplier_email;
    newInventory.supplier_number = req.body.supplier_number;
    newInventory.is_available = req.body.is_available;
    newInventory.product_image = req.body.product_image;

    newInventory.save(function(err) {
      if (err) {
        console.log("Error in creating  new  Inventory: " + err);
        // throw err;
        return next(err);
      }
      console.log("New Inventory Save Successfully");
      //return (null, newJob);
      console.log(newInventory);
      res.status(201).json(newInventory);
    });
  } catch (error) {
    return res.status(500).json({
      success: false,
      error: error.message
    });
  }
});

//Search product by Id
router.post("/read/:_id", requireAuth, function(req, res) {
  var _id = req.params._id;
  getDetailInventory(_id, function(err, result) {
    if (err) {
      res.json({ success: false, message: "An Error Occured " });
    } else {
      res.json(result);
    }
  });
});

//Gets product by category with pagination
router.get("/read", requireAuth, async function(req, res) {
  let query = req.query;
  let product_category = Object.keys(query)[0];
  console.log(product_category);
  let value = req.query.product_category;
  let pageNo = parseInt(req.query.pageNo);
  let size = parseInt(req.query.size);
  if (pageNo < 0 || pageNo === 0) {
    return res.json({ success: false, message: "Invalid page Number" });
  }

  countInventoryByCategory(value, function(err, res) {
    if (err) {
      res.json({ success: true, message: "Error Fetching data" });
    }
  });

  await getInventoryByCategory(
    [product_category],
    value,
    size,
    pageNo,
    function(err, data) {
      if (err) {
        res.json({ success: false, message: "Error Fetching data" });
      } else {
        res.json({
          success: false,
          message: data
        });
      }
    }
  );
});

//Gets product by name with pagination
router.get("/product", async function(req, res) {
  let query = req.query;
  console.log(query);
  let product_name = Object.keys(query)[0];
  console.log(product_name);
  let value = req.query.product_name;
  let pageNo = parseInt(req.query.pageNo);
  let size = parseInt(req.query.size);
  if (pageNo < 0 || pageNo === 0) {
    return res.json({ success: false, message: "Invalid page Number" });
  }

  countInventoryByCategory(value, function(err, res) {
    if (err) {
      res.json({ success: false, message: "Error Fetching data" });
    }
  });

  await getInventoryByCategory([product_name], value, size, pageNo, function(
    err,
    data
  ) {
    if (err) {
      res.json({ success: false, message: "Error Fetching data" });
    } else {
      res.json({
        success: false,
        message: data
      });
    }
  });
});

//Gets list of products by search keywords
router.get("/search/find/:query", async function(req, res) {
  let keyword = req.params.keyword;
  // let pageNo = parseInt(req.query.pageNo);
  // let size = parseInt(req.query.size);
  // if (pageNo < 0 || pageNo === 0) {
  //   return res.json({ success: false, message: "Invalid page Number" });
  // }
  searchByKeyword(keyword, function(err, data) {
    if (err) {
      res.json({ success: false, message: "Error Fetching data" });
    } else {
      res.json({
        success: false,
        message: data
      });
    }
  });
});

//Updates product details
router.post("/update/:id", function(req, res) {
  var id = req.params.id;
  getOneAndUpdateInventory(
    id,
    req.body.product_name,
    req.body.product_description,
    req.body.product_category,
    req.body.product_price,
    req.body.stock_number,
    req.body.delivery_date,
    req.body.total_stock,
    req.body.item_supplier,
    req.body.supplier_name,
    req.body.supplier_email,
    req.body.supplier_number,
    req.body.is_available,
    function(err, result) {
      if (err) {
        res.json({ success: false, message: "An Error Occured " });
      } else {
        res.json(result);
      }
    }
  );
});

//Reduces the number of product
router.delete("/delete/:stock_number_id", function(req, res) {
  var id = req.params.stock_number_id;
  deleteInventory(id, function(err, result) {
    if (err) {
      res.json({ success: false, message: "An Error Occured " });
    } else {
      res.json(result);
    }
  });
});

//Gets the list of product by category
router.post("/getbycategory/:skip/:limit", requireAuth, function(req, res) {
  var skip = req.params.skip;
  var limit = req.params.limit;
  if (true) {
    console.log("Yahiiko");
    getInventoryAll(limit, function(err, result) {
      if (err) {
        res.json({ success: false, message: "An Error Occured " });
      } else {
        //console.log(result)
        res.json(result);
      }
    });
  }
});

//Shipment of customer's order
router.post("/receiving/insert", requireAuth, function(req, res) {
  console.log("Receiving ", req.body);
  var newReceiving = new Receiving();

  newReceiving.inventory_id = req.body.inventory_id;
  newReceiving.quantity = req.body.quantity;
  newReceiving.unit = req.body.unit;
  newReceiving.price_per_unit = req.body.price_per_unit;
  newReceiving.additional_cost_acquisition =
    req.body.additional_cost_acquisition;
  newReceiving.taxes = req.body.taxes;
  newReceiving.receiving_date = req.body.receiving_date;
  newReceiving.notes = req.body.notes;

  newReceiving.save(function(err) {
    if (err) {
      console.log("Error in creating  new  Inventory: " + err);
      throw err;
    }
    console.log("New Receiving Save Successfully");
    //return (null, newJob);

    getDeliveries(req.body.inventory_id, function(err, result) {
      if (err) {
        res.json({ success: false, message: "An Error Occured " });
      } else {
        //console.log(result)
        var deliveries = result;
        var s = [];
        for (var i = 0; i < deliveries.length; i++) {
          var obj = deliveries[i];
          var n = Number(obj.quantity);
          s.push(n);

          var summation = s.reduce((a, b) => a + b, 0);
          console.log(obj.quantity);
          console.log("Total orders", summation);
          //UPdate Total Number of Available Stock
        }
      }
    });
    console.log(newReceiving);
    res.json(newReceiving);
  });
});

//Customer adds to cart
router.post("/orders/insert", requireAuth, function(req, res) {
  var newOrder = new Orders();

  var username = req.user.username;
  newOrder.inventory_id = req.body.inventory_id;
  newOrder.quantity = req.body.quantity;
  newOrder.price_per_unit = req.body.price_per_unit;
  newOrder.order_status = req.body.order_status;
  newOrder.username = username;

  console.log("Orders ", req.body);

  newOrder.save(function(err) {
    if (err) {
      console.log("Error in creating  new  Inventory: " + err);
      throw err;
    }
    console.log("New Orders Save Successfully");
    //return (null, newJob);
    console.log(newOrder);
    res.json(newOrder);
  });
});

//Search for order based on order_status
router.post("/orders/find/:order_status", requireAuth, function(req, res) {
  var username = req.user.username;
  var order_status = req.params.order_status;
  getOrderByStatus(order_status, function(err, result) {
    if (err) {
      res.json({ success: false, message: "An Error Occured " });
    } else {
      //console.log(result)
      res.json(result);
    }
  });
});

//Create userType
router.get("/makeadmin", function(req, res) {
  var username = "ragnarokconnectio4869@gmail.com";
  User.findOneAndUpdate(
    { _id: id },
    {
      $set: {
        userType: "admin"
      }
    },
    { upsert: true, new: true },
    function(err, res) {
      if (err) {
        return err;
      } else {
        callback(err, res);
      }
    }
  );
});

module.exports = router;
