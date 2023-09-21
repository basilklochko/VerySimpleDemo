class Demo {
    constructor() {
        this.httpService = "$HttpService";
        this.componentService = "$ComponentService";
        this.examples = [];
        this.isTs = false;
        this.jsSelected = "active";
        this.tsSelected = "";
    }
    $onComponentLoad() {
        this.onLoad();
    }
    onLoad() {
        this.httpService.getJson("./examples.json").then((res) => {
            this.examples = res;
        });
    }
    onExample(name) {
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
    onJs() {
        this.isTs = false;
        this.jsSelected = "active";
        this.tsSelected = "";
    }
    onTs() {
        this.isTs = true;
        this.jsSelected = "";
        this.tsSelected = "active";
    }
}
