class Header {
    constructor() {
        this.componentService = "$ComponentService";
        this.getStartedActive = "";
        this.demoActive = "";
        this.documentationActive = "";
    }
    $onComponentLoad() {
        this.onGetStartedClick();
    }
    onGetStartedClick() {
        this.getStartedActive = "active";
        this.demoActive = "";
        this.documentationActive = "";
        this.componentService.renderPartial("started.html", "content").then((res) => {
        });
    }
    onDemoClick() {
        this.getStartedActive = "";
        this.demoActive = "active";
        this.documentationActive = "";
        this.componentService.renderPartial("demo.html", "content").then((res) => {
        });
    }
    onDocumentationClick() {
        this.getStartedActive = "";
        this.demoActive = "";
        this.documentationActive = "active";
        this.componentService.renderPartial("documentation.html", "content").then((res) => {
        });
    }
}
