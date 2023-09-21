class VsHide {
    public isHidden: boolean = false;

    public onClick(): void {
        this.isHidden = !this.isHidden;
    }

    public buttonText(): string {
        return this.isHidden ? "Show" : "Hide";
    }
}