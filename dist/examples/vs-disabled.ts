class VsDisabled {
    public isDisabled: boolean = false;

    public onClick(): void {
        this.isDisabled = !this.isDisabled;
    }

    public buttonText(): string {
        return this.isDisabled ? "Enable" : "Disable";
    }
}