class Inventory {
    constructor(items = []) {
        this.items = items;
    }
}

window.inv_count = function(inv) {
    return inv.items.length;
}

window.inv_has = function(inv, name, count = 1) {
    let item = inv.items.find(x => x.name === name);
    return item !== undefined && item.count >= count;
}

window.inv_add = function(inv, name, count = 1) {
    let item = inv.items.find(x => x.name === name);
    if (item !== undefined) {
        item.count += count;
    } else {
        inv.items.push(new Item(name, count));
    }
}

window.inv_remove = function(inv, name, count = 1) {
    let item = inv.items.find(x => x.name === name);

    if (item !== undefined) {
        if (item.count > 1) {
            item.count -= count;
        } else {
            inv.items = inv.items.filter(x => x.name !== name);
        }
    }
}

class Item {

	constructor(name = "unnamed", count = 1) {
		this.name = name;
		this.count = count;
	}
}

class Attribute {

    static initialPoints = 12;

    constructor(name, description, value = 0) {
        this.name = name;
        this.description = description;
        this.value = value; // max 5
    }
}