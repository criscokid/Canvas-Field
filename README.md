Canvas Field is an attempt to create a NFL football gamecast type field UI found on sites such as ESPN and CBS in canvas with a javascript API.

**API**

* Field(elementId): constructor, creates a new field object using the element of a given name.
* markPlay(yards): creates a mark for a play. automatically moves area of next play downward so they do not overlap, also places a black mark at the end of the bar to indicate direction of play.
* yardsToGo(): calculates remaining yards until a touchdown.
* firstDownMark(yards): creates a first down yellow line marker at the given yards.

**KNOWN ISSUES**

* currently depends on a cavnas element that is 720x300.
* currently plays only go to the left.
* all plays are in one color.
* yardage APIs work based on 0-100 yards rather than 0-50 and a direction
