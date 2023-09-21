class VsDisabled {
    constructor() {
        this.isDisabled = false;
    }
    onClick() {
        this.isDisabled = !this.isDisabled;
    }
    buttonText() {
        return this.isDisabled ? "Enable" : "Disable";
    }
}
