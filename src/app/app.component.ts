import { Component, VERSION } from "@angular/core";

@Component({
  selector: "my-app",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.css"]
})
export class AppComponent {
  name = "Angular " + VERSION.major;
  public typewriter_text: string =
    "ویدیو، مطلب آموزشی ، مقاله مورد نظرت رو جستجو کن!";
  public typewriter_display: string = "";

  typingCallback(that) {
    let total_length = that.typewriter_text.length;
    let current_length = that.typewriter_display.length;
    if (current_length < total_length) {
      that.typewriter_display += that.typewriter_text[current_length];
      setTimeout(that.typingCallback, 100, that);
    } else {
      that.typewriter_display = "";
    }
  }

  ngOnInit() {
    this.typingCallback(this);
    setInterval(() => this.typingCallback(this), 9000);
  }
}
