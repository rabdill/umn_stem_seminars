table = document.getElementById("seminars");
cols = ["title", "dept", "topics", "frequency", "time", "location"];

for(var i=0, entry; entry=entries[i]; i++) {
  row = table.insertRow(-1);
  for(var j=0, col; col=cols[j]; j++) {
    cell = row.insertCell(j);
    if(col == "title") {
      contents = "<a target='_blank' class='link-flip' href='" + entry["url"] + "'>" + entry["title"] + "</a>";
    } else if(col == "topics" && entry["topics"] && entry["topics"] != "") {
      contents = "&ldquo;" + entry["topics"] + "&rdquo;";
    } else {
      contents = entry[col];
    }
    cell.innerHTML = contents;
  }
}