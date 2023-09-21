class For {
    constructor() {
        this.comps = [{ text: "item1", item: "name1" }, { text: "item2", item: "name2" }, { text: "item3", item: "name3" }];
    }
    onReset() {
        this.comps = [{ text: "item1", item: "name1" }, { text: "item2", item: "name2" }, { text: "item3", item: "name3" }];
    }
    onClear() {
        this.comps = [];
    }
    onRemove(text) {
        this.comps.splice(this.comps.findIndex(item => item.text == text), 1);
    }
}
