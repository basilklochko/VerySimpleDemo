class Demo {
    public httpService: any = "$HttpService";
    public componentService: any = "$ComponentService";

    public examples = [];

    public isTs: boolean = false;
    public jsSelected: string = "active";
    public tsSelected: string = "";

    public $onComponentLoad(): void {
        this.onLoad();
    }

    public onLoad(): void {
        this.httpService.getJson("./examples.json").then((res) => {
            this.examples = res;
        });
    }

    public onExample(name: string): void {
        let example = this.examples.find(e => e.name == name);

        this.examples.forEach(ex => {
            if (ex.name == name) {
                ex.active = true;
            }
            else {
                ex.active = false;
            }
        });

        this.httpService.getText("examples/" + example.name + ".html").then((res) => {
            this.componentService.renderText(res, "html");
        });

        this.httpService.getText("examples/" + example.name + ".ts").then((res) => {
            this.componentService.renderText(res, "ts");
        });

        this.httpService.getText("examples/" + example.name + ".js").then((res) => {
            this.componentService.renderText(res, "js");
        });

        this.componentService.renderPartial("examples/" + example.name + ".html", "result").then((res) => {

        });
    }

    public onJs(): void {
        this.isTs = false;
        this.jsSelected = "active";
        this.tsSelected = "";
    }

    public onTs(): void {
        this.isTs = true;
        this.jsSelected = "";
        this.tsSelected = "active";
    }
}