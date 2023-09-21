class VsEvent {
    constructor() {
        this.text = "";
    }
    onChange() {
        this.text = "that was a change event";
    }
    onClick() {
        this.text = "that was a click event";
    }
}
