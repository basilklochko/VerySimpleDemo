class VsTarget {
    public componentService: any = "$ComponentService";

    public onClick(): void {
        this.componentService.renderPartial("examples/dynamic.html", "render-partial-dynamic").then((res) => {

        });
        this.componentService.renderPartial("examples/static.html", "render-partial-static").then((res) => {

        });
    }
}