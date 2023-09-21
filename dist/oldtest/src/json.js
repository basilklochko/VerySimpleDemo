class Json {
    constructor() {
        this.httpService = "$HttpService";
        this.isNotLoading = true;
        this.data = [];
    }
    $onComponentLoad() {
        this.onLoad();
    }
    onLoad() {
        this.isNotLoading = false;
        this.onClear();
        this.httpService.getJson("big.json").then((res) => {
            this.data = res;
            this.isNotLoading = false;
        });
    }
    onClear() {
        this.data = [];
    }
}
