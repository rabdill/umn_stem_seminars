table = document.getElementById("seminars");
cols = ["title", "dept", "topics", "frequency", "time", "location", "url"];

for(var i=0, entry; entry=entries[i]; i++) {
  row = table.insertRow(-1);
  for(var j=0, col; col=cols[j]; j++) {
    cell = row.insertCell(j);
    if(col == "url") {
      contents = "<a target='_blank' class='link-flip' href='" + entry[col] + "'>" + entry[col] + "</a>";
    } else {
      contents = entry[col];
    }
    cell.innerHTML = contents;
  }
}