class VsTarget {
    constructor() {
        this.componentService = "$ComponentService";
    }
    onClick() {
        this.componentService.renderPartial("examples/dynamic.html", "render-partial-dynamic").then((res) => {
        });
        this.componentService.renderPartial("examples/static.html", "render-partial-static").then((res) => {
        });
    }
}
