export class DroidesStack {
    private droidesTab: string[] = [];

    pop() {
        return this.droidesTab.pop();
    }

    push(droidName: string): DroidesStack {
        this.droidesTab.push(droidName);
        return this;
    }
}