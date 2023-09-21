class RenderPartial {
    public componentService: any = "$ComponentService";

    public onClick(): void {
        this.componentService.renderPartial("hide.html", "renderPartial").then((res) => {
            console.log(res);
        });
    }
}