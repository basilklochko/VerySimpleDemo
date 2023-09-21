class Json {
    public httpService: any = "$HttpService";
    public disabledControls = false;
    public isNotLoading = false;

    //public nameIsEmpty = true;

    public data = [];

    public firstName: string = "";
    public lastName: string = "";

    public $onComponentLoad(): void {
        this.onLoad();
    }

    public onLoad(): void {
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

    public onClear(): void {
        this.data = [];
    }

    public onRemove(id: string): void {
        this.data.splice(this.data.findIndex(item => item.id == id), 1);
    }

    public onItem(last_name: string): void {
        console.log(last_name);
    }

    public onAdd(): void {
        console.log('here');
        if (this.firstName.length > 0 && this.lastName.length > 0) {
            this.data.push({
                "first_name": this.firstName,
                "last_name": this.lastName
            });
        }
    }
}