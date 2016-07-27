function elements () {
  this.createFolderBtn = element(by.css('[ng-click="file.createFolder()"]'));
  this.clearTransferList = element(by.css('[ng-click="transfer.toggleAutoClear()"]'));
  this.checkUploadBtn = element(by.css('[ng-click="upload.upload()"]'));
  this.cancelSeletedFiles = element.all(by.css('[ng-click="upload.delete(file.id)"]'));
  this.fileCheckbox = element.all(by.css('[ng-checked="f.checked"]'));
  this.fileList = element.all(by.repeater('f in file.data'));
  this.folderExistMessage = element(by.css('[ng-show="create.duplicated"]'));
  this.noFileTitle = element(by.css('[class="md-headline ng-scope"]'));
  this.numberOfFiles = element(by.binding('upload.files.length'));
  this.noFileSubtitle = element(by.css('[class="md-subhead ng-scope"]'));
  this.sizeOfFiles = element(by.binding('(upload.size | filesize)'));
  this.selectUploadFile = element.all(by.css('input[type="file"]')).first();
  this.selectUploadFileBtn = element.all(by.css('[ngf-select="upload.select($files)"]')).get(1);
  this.signoutCheck = element(by.css('md-dialog[aria-label="Sign Out"]'));
  this.transfersBtn = element(by.css('[ng-click="actionNav.openTransfers()"]'));
  this.transfersForm = element.all(by.id('info-container')).first();
  this.transfersList = element.all(by.repeater('t in transfer.transfers'));
  this.transfersProgress = element(by.css('[ng-if="transfer.isUploading(t)"]'));
  this.transfersInto = element(by.css('[class="transfer-info"]'));
  this.uploadFileBtn = element(by.css('[ng-click="file.upload()"]'));
  this.uploadBtn = element(by.css('[ng-click="actionNav.create($event)"]'));
  this.uploadCancelBtn = element.all(by.css('[ng-click="upload.cancel()"]'));
  this.uploadForm = element(by.css('[aria-label="Upload Files Dialog"]'));
  this.uploadStayBtn = element(by.css('[ng-click="dialog.abort()"]'));
  this.uploadLeaveBtn = element(by.css('[ng-click="dialog.hide()"]'));
  this.or = element.all(by.css('span[class="ng-scope"]')).get(18);
  this.propertiesBtn = element.all(by.css('[ng-click="actionNav.openProperties()"]'));
  this.propertiesForm = element.all(by.id('info-container')).get(1);
  this.propertiesFormTitle = element.all(by.css('[class="md-menu-toolbar"]'));
  this.propertiesCancelBtn = element(by.css('[ng-click="propertie.close()"]'));
  this.propertiesFileListItem = element.all(by.css('h1[class="time-title-width ng-scope"]'));
  this.propertiesFileListDetail = element.all(by.css('p[class="md-body-1 md-accent ng-binding"]'));
}

module.exports = elements;
