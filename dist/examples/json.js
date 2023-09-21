class Json {
    constructor() {
        this.httpService = "$HttpService";
        this.disabledControls = false;
        this.isNotLoading = false;
        //public nameIsEmpty = true;
        this.data = [];
        this.firstName = "";
        this.lastName = "";
    }
    $onComponentLoad() {
        this.onLoad();
    }
    onLoad() {
        this.isNotLoading = false;
        this.onClear();
        this.disabledControls = true;
        this.httpService.getJson("examples/big.json").then((res) => {
            this.data = res;
            this.data.splice(10, 90);
            this.disabledControls = false;
            this.isNotLoading = true;
        });
    }
    onClear() {
        this.data = [];
    }
    onRemove(id) {
        this.data.splice(this.data.findIndex(item => item.id == id), 1);
    }
    onItem(last_name) {
        console.log(last_name);
    }
    onAdd() {
        console.log('here');
        if (this.firstName.length > 0 && this.lastName.length > 0) {
            this.data.push({
                "first_name": this.firstName,
                "last_name": this.lastName
            });
        }
    }
}
