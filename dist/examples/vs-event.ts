class VsEvent {
    public text: string = "";

    public onChange(): void {
        this.text = "that was a change event";
    }

    public onClick(): void {
        this.text = "that was a click event";
    }
}