var Inventory = require("../models/inventory");
var Receiving = require("../models/receiving");
var Orders = require("../models/order");

function getDetailInventory(id, callback) {
  Inventory.findOne({ _id: id }, function(err, res) {
    // In case of any error, return using the done method.
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

function getOneandUpdateInventory(
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

module.exports = {
  getDetailInventory,
  countInventoryByCategory,
  searchByKeyword,
  getInventoryByCategory,
  getInventoryByName,
  getInventoryAll,
  getInventoryByCartAndSort,
  deleteInventory,
  getDetailOrder,
  getOrderByStatus,
  getDeliveries,
  deleteOrder
};
