function sendAnalytics(data: string): void {
  console.log(data);
}

const data = "files";
sendAnalytics(`Sending... ${data}`);
