class Test {
    constructor() {
        this.httpService = "$HttpService";
        this.isDisabled = false;
        this.text = "initial value";
        this.dynClass = "red";
    }
    $onLoadComplete() {
        this.httpService.getJson("data.json").then((res) => {
            this.text = res.data;
            this.dynClass = "green";
            this.isDisabled = false;
        });
    }
    onClick() {
        this.dynClass = "green";
        this.text = "initial value";
    }
}
