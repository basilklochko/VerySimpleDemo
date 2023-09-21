class VsHide {
    constructor() {
        this.isHidden = false;
    }
    onClick() {
        this.isHidden = !this.isHidden;
    }
    buttonText() {
        return this.isHidden ? "Show" : "Hide";
    }
}
