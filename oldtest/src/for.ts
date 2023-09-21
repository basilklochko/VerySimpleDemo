class For {
    public comps: any[] = [{ text: "item1", item: "name1" }, { text: "item2", item: "name2" }, { text: "item3", item: "name3" }];

    public onReset(): void {
        this.comps = [{ text: "item1", item: "name1" }, { text: "item2", item: "name2" }, { text: "item3", item: "name3" }];
    }

    public onClear(): void {
        this.comps = [];
    }

    public onRemove(text: string): void {
        this.comps.splice(this.comps.findIndex(item => item.text == text), 1);
    }
}