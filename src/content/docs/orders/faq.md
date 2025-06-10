---
tableOfContents:
  minHeadingLevel: 1
  maxHeadingLevel: 5
title: Orders FAQ

---


**Order Printing Questions**
<br /><br />
<b><u>My printer doesn't show up, where is it?</u></b>
<br /><br />
- Check within your settings, the Printers and Scanners section - see if your printer is installed or needs to be added.<br />
<img src="/screenPrints/PrintSet.png" alt="Print Screenshot" style="width:70%;"><br />
  - Verify the printer is not showing 'Offline' (If it is, it might be turned off or disconnected.)
  - Try printing a test page (or test label) from within its specific settings.
  - Label Printers typically require a specific service to be installed to allow the web browser access.  See details in the FAQ items further below for DYMO and Zebra.

<br /><br />
<b><u>I printed my order out on paper but the left and right edges are cut off, what happened?</u></b>
<br /><br />
- Some printers need to be specifically told they are recieving a document with small margins. When you print and are at the final dialog after viewing the PDF render and clicking Print, check the settings on the left side for a "Margins" property that is set to "Default" and manually set it to Small, then try printing again.<br />
<img src="/screenPrints/Print.png" alt="Print Screenshot" style="width:30%;"><br />

<br /><br />
<b><u>Why Can't I print to my DYMO Label Printer?</u></b>
<br /><br />
- Ensure the printer is connected properly (USB / Network), plugged in and powered on.<br />
- Verify in your system settings, in the printers and scanners scanners section, that your system can detect the DYMO printer:<br />
<img src="/screenPrints/DymoA.png" alt="Print Screenshot" style="width:75%;"><br />
- Ensure you have the Dymo Connect Service running on your machine so browser based apps can access your DYMO(s):<br />
<img src="/screenPrints/Dymo.png" alt="Print Screenshot" style="width:50%;"><br />


<br /><br />
<b><u>Why Can't I print to my Zebra Label Printer?</u></b>
<br /><br />
- Ensure the printer is connected properly (USB / Network), plugged in and powered on.<br />
- Verify in your system settings, in the printers and scanners scanners section, that your system can detect the Zebra printer:<br />
<img src="/screenPrints/zebraA.png" alt="Print Screenshot" style="width:75%;"><br />
- Ensure you have the Zebra Browser Print Service running on your machine so browser based apps can access your Zebra printer:<br />
<img src="/screenPrints/zebra.png" alt="Print Screenshot" style="width:50%;"><br />
- Your Zebra printer needs to be listed in the 'Default Devices' section.<br />
  - Since the Zebra print service goes directly to the attached printer and doesn't go through the windows drivers, it will show in the list as the code representing the port it's connected to, not it's friendly name. 
- order.labxchange.io needs to be one of the accepted hosts. <br />
  - You should be prompted by the Zebra Print service to accept this host automatically the first time you access the print options in the app.

<br /><br />
**General Order Questions**
<img src="/comingSoon.png" alt="New Account Screenshot" style="width:25%;">lky