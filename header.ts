class Header {
    public componentService: any = "$ComponentService";

    public getStartedActive = "";
    public demoActive = "";
    public documentationActive = "";

    public $onComponentLoad(): void {
        this.onGetStartedClick();
    }

    public onGetStartedClick(): void {
        this.getStartedActive = "active";
        this.demoActive = "";
        this.documentationActive = "";

        this.componentService.renderPartial("started.html", "content").then((res) => {
        });
    }

    public onDemoClick(): void {
        this.getStartedActive = "";
        this.demoActive = "active";
        this.documentationActive = "";

        this.componentService.renderPartial("demo.html", "content").then((res) => {
        });
    }

    public onDocumentationClick(): void {
        this.getStartedActive = "";
        this.demoActive = "";
        this.documentationActive = "active";

        this.componentService.renderPartial("documentation.html", "content").then((res) => {
        });
    }
}