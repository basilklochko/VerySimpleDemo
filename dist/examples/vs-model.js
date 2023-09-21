class VsModel {
    constructor() {
        this.simple = "i am simple text";
        this.items = ["item1", "item2", "item3"];
        this.comps = [{ text: "item1", item: "name1" }, { text: "item2", item: "name2" }, { text: "item3", item: "name3" }];
        this.model = {
            one: "i am one level text",
            two: {
                one: "i am two levels text",
            },
            items: ["item1", "item2", "item3"],
            complex: [{ one: "1", }, { one: "2", }, { one: "3", }]
        };
    }
    onReset() {
        this.simple = "i am simple text";
        this.items[1] = "item2";
        this.model.one = "i am one level text";
        this.model.two.one = "i am two levels text";
        this.model.items[0] = "item1";
        this.model.complex[1].one = "2";
        this.comps[1].text = "item2";
    }
}
