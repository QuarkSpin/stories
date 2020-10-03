class Inventory {
    constructor(items = []) {
        this.items = items;
    }

    get count() {
        return this.items.length;
    }

    has(name, count = 1) {
        let item = this.items.find(x => x.name === name);
        return item !== undefined && item.count >= count;
    }

    add(name, count = 1) {
        let item = this.items.find(x => x.name === name);
        if (item !== undefined) {
            item.count += count;
        } else {
            this.items.push(new Item(name, count));
        }
    }

    remove(name, count = 1) {
        let item = this.items.find(x => x.name === name);

        if (item !== undefined) {
            if (item.count > 1) {
                item.count -= count;
            } else {
                this.items = this.items.filter(x => x.name !== name);
            }
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

class Player {

    constructor(firstName, lastName, gender, nationality, age, money) {
        this.firstName = firstName;
        this.lastName = lastName;
        this.fullName = `${firstName} ${lastName}`;
        this.gender = gender;
        this.nationality = nationality;
        this.age = age;
        this.money = money;
        this.inventory = new Inventory();
        this.life = 10;
	    this.attributes = {
            int: new Attribute("Intellect", "A quel point vous êtes intelligent(e), érudit(e), etc."),
            phy: new Attribute("Physique", "A quel point vous êtes fort(e), endurant(e), etc."),
            psy: new Attribute("Psychique", "A quel point vous êtes autoritaire, charismatique, etc."),
            hab: new Attribute("Habilité", "A quel point vous êtes agile, vigilent, etc."),
        }
    }

    setAttributes(intVal, phyVal, psyVal, habVal) {
        this.attributes.int.value = intVal;
        this.attributes.phy.value = phyVal;
        this.attributes.psy.value = psyVal;
        this.attributes.hab.value = habVal;
    }
}