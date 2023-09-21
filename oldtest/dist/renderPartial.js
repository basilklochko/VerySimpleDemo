class RenderPartial {
    constructor() {
        this.componentService = "$ComponentService";
    }
    onClick() {
        this.componentService.renderPartial("hide.html", "renderPartial").then((res) => {
            console.log(res);
        });
    }
}
