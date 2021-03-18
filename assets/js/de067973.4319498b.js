(window.webpackJsonp=window.webpackJsonp||[]).push([[57],{125:function(e,t,a){"use strict";a.r(t),a.d(t,"frontMatter",(function(){return b})),a.d(t,"metadata",(function(){return c})),a.d(t,"toc",(function(){return o})),a.d(t,"default",(function(){return i}));var r=a(3),n=a(7),l=(a(0),a(132)),b={},c={unversionedId:"Core/protocols/ModelAdapter",id:"Core/protocols/ModelAdapter",isDocsHomePage:!1,title:"ModelAdapter",description:"PROTOCOL",source:"@site/docs/Core/protocols/ModelAdapter.md",slug:"/Core/protocols/ModelAdapter",permalink:"/SyncKit/Core/protocols/ModelAdapter",version:"current",sidebar:"api",previous:{title:"KeyValueStore",permalink:"/SyncKit/Core/protocols/KeyValueStore"},next:{title:"ParentKey",permalink:"/SyncKit/Core/protocols/ParentKey"}},o=[{value:"Properties",id:"properties",children:[{value:"<code>hasChanges</code>",id:"haschanges",children:[]},{value:"<code>recordZoneID</code>",id:"recordzoneid",children:[]},{value:"<code>serverChangeToken</code>",id:"serverchangetoken",children:[]},{value:"<code>mergePolicy</code>",id:"mergepolicy",children:[]}]},{value:"Methods",id:"methods",children:[{value:"<code>prepareToImport()</code>",id:"preparetoimport",children:[]},{value:"<code>saveChanges(in:)</code>",id:"savechangesin",children:[]},{value:"<code>deleteRecords(with:)</code>",id:"deleterecordswith",children:[]},{value:"<code>persistImportedChanges(completion:)</code>",id:"persistimportedchangescompletion",children:[]},{value:"<code>recordsToUpload(limit:)</code>",id:"recordstouploadlimit",children:[]},{value:"<code>didUpload(savedRecords:)</code>",id:"diduploadsavedrecords",children:[]},{value:"<code>recordIDsMarkedForDeletion(limit:)</code>",id:"recordidsmarkedfordeletionlimit",children:[]},{value:"<code>didDelete(recordIDs:)</code>",id:"diddeleterecordids",children:[]},{value:"<code>hasRecordID(_:)</code>",id:"hasrecordid_",children:[]},{value:"<code>didFinishImport(with:)</code>",id:"didfinishimportwith",children:[]},{value:"<code>saveToken(_:)</code>",id:"savetoken_",children:[]},{value:"<code>deleteChangeTracking()</code>",id:"deletechangetracking",children:[]},{value:"<code>record(for:)</code>",id:"recordfor",children:[]},{value:"<code>share(for:)</code>",id:"sharefor",children:[]},{value:"<code>save(share:for:)</code>",id:"savesharefor",children:[]},{value:"<code>deleteShare(for:)</code>",id:"deletesharefor",children:[]},{value:"<code>recordsToUpdateParentRelationshipsForRoot(_:)</code>",id:"recordstoupdateparentrelationshipsforroot_",children:[]}]},{value:"Notifications",id:"notifications",children:[]}],d={toc:o};function i(e){var t=e.components,a=Object(n.a)(e,["components"]);return Object(l.b)("wrapper",Object(r.a)({},d,a,{components:t,mdxType:"MDXLayout"}),Object(l.b)("p",null,Object(l.b)("strong",{parentName:"p"},"PROTOCOL")),Object(l.b)("h1",{id:"modeladapter"},Object(l.b)("inlineCode",{parentName:"h1"},"ModelAdapter")),Object(l.b)("pre",null,Object(l.b)("code",{parentName:"pre",className:"language-swift"},"@objc public protocol ModelAdapter: class\n")),Object(l.b)("p",null,"An object conforming to ",Object(l.b)("inlineCode",{parentName:"p"},"ModelAdapter")," will track the local model, provide changes to upload to CloudKit and import downloaded changes."),Object(l.b)("h2",{id:"properties"},"Properties"),Object(l.b)("h3",{id:"haschanges"},Object(l.b)("inlineCode",{parentName:"h3"},"hasChanges")),Object(l.b)("pre",null,Object(l.b)("code",{parentName:"pre",className:"language-swift"},"var hasChanges: Bool\n")),Object(l.b)("p",null,"Whether the model has any changes"),Object(l.b)("h3",{id:"recordzoneid"},Object(l.b)("inlineCode",{parentName:"h3"},"recordZoneID")),Object(l.b)("pre",null,Object(l.b)("code",{parentName:"pre",className:"language-swift"},"var recordZoneID: CKRecordZone.ID\n")),Object(l.b)("p",null,"Record zone ID managed by this adapter"),Object(l.b)("h3",{id:"serverchangetoken"},Object(l.b)("inlineCode",{parentName:"h3"},"serverChangeToken")),Object(l.b)("pre",null,Object(l.b)("code",{parentName:"pre",className:"language-swift"},"var serverChangeToken: CKServerChangeToken?\n")),Object(l.b)("p",null,"Latest ",Object(l.b)("inlineCode",{parentName:"p"},"CKServerChangeToken")," stored by this adapter, or ",Object(l.b)("inlineCode",{parentName:"p"},"nil")," if one does not exist."),Object(l.b)("h3",{id:"mergepolicy"},Object(l.b)("inlineCode",{parentName:"h3"},"mergePolicy")),Object(l.b)("pre",null,Object(l.b)("code",{parentName:"pre",className:"language-swift"},"var mergePolicy: MergePolicy\n")),Object(l.b)("p",null,"Merge policy in case of conflicts. Default is ",Object(l.b)("inlineCode",{parentName:"p"},"server"),"."),Object(l.b)("h2",{id:"methods"},"Methods"),Object(l.b)("h3",{id:"preparetoimport"},Object(l.b)("inlineCode",{parentName:"h3"},"prepareToImport()")),Object(l.b)("pre",null,Object(l.b)("code",{parentName:"pre",className:"language-swift"},"func prepareToImport()\n")),Object(l.b)("p",null,"Tells the model adapter that an import operation will begin"),Object(l.b)("h3",{id:"savechangesin"},Object(l.b)("inlineCode",{parentName:"h3"},"saveChanges(in:)")),Object(l.b)("pre",null,Object(l.b)("code",{parentName:"pre",className:"language-swift"},"func saveChanges(in records: [CKRecord])\n")),Object(l.b)("p",null,"Apply changes in the provided record to the local model objects and save the records."),Object(l.b)("ul",null,Object(l.b)("li",{parentName:"ul"},"Parameter records: Array of ",Object(l.b)("inlineCode",{parentName:"li"},"CKRecord")," that were obtained from CloudKit.")),Object(l.b)("h4",{id:"parameters"},"Parameters"),Object(l.b)("table",null,Object(l.b)("thead",{parentName:"table"},Object(l.b)("tr",{parentName:"thead"},Object(l.b)("th",{parentName:"tr",align:null},"Name"),Object(l.b)("th",{parentName:"tr",align:null},"Description"))),Object(l.b)("tbody",{parentName:"table"},Object(l.b)("tr",{parentName:"tbody"},Object(l.b)("td",{parentName:"tr",align:null},"records"),Object(l.b)("td",{parentName:"tr",align:null},"Array of ",Object(l.b)("inlineCode",{parentName:"td"},"CKRecord")," that were obtained from CloudKit.")))),Object(l.b)("h3",{id:"deleterecordswith"},Object(l.b)("inlineCode",{parentName:"h3"},"deleteRecords(with:)")),Object(l.b)("pre",null,Object(l.b)("code",{parentName:"pre",className:"language-swift"},"func deleteRecords(with recordIDs: [CKRecord.ID])\n")),Object(l.b)("p",null,"Delete the local model objects corresponding to the given record IDs."),Object(l.b)("ul",null,Object(l.b)("li",{parentName:"ul"},"Parameter recordIDs: Array of identifiers of records that were deleted on CloudKit.")),Object(l.b)("h4",{id:"parameters-1"},"Parameters"),Object(l.b)("table",null,Object(l.b)("thead",{parentName:"table"},Object(l.b)("tr",{parentName:"thead"},Object(l.b)("th",{parentName:"tr",align:null},"Name"),Object(l.b)("th",{parentName:"tr",align:null},"Description"))),Object(l.b)("tbody",{parentName:"table"},Object(l.b)("tr",{parentName:"tbody"},Object(l.b)("td",{parentName:"tr",align:null},"recordIDs"),Object(l.b)("td",{parentName:"tr",align:null},"Array of identifiers of records that were deleted on CloudKit.")))),Object(l.b)("h3",{id:"persistimportedchangescompletion"},Object(l.b)("inlineCode",{parentName:"h3"},"persistImportedChanges(completion:)")),Object(l.b)("pre",null,Object(l.b)("code",{parentName:"pre",className:"language-swift"},"func persistImportedChanges(completion: @escaping (Error?)->())\n")),Object(l.b)("p",null,"Tells the model adapter to persist all downloaded changes in the current import operation."),Object(l.b)("ul",null,Object(l.b)("li",{parentName:"ul"},"Parameter completion: Block to be called after changes have been persisted.")),Object(l.b)("h4",{id:"parameters-2"},"Parameters"),Object(l.b)("table",null,Object(l.b)("thead",{parentName:"table"},Object(l.b)("tr",{parentName:"thead"},Object(l.b)("th",{parentName:"tr",align:null},"Name"),Object(l.b)("th",{parentName:"tr",align:null},"Description"))),Object(l.b)("tbody",{parentName:"table"},Object(l.b)("tr",{parentName:"tbody"},Object(l.b)("td",{parentName:"tr",align:null},"completion"),Object(l.b)("td",{parentName:"tr",align:null},"Block to be called after changes have been persisted.")))),Object(l.b)("h3",{id:"recordstouploadlimit"},Object(l.b)("inlineCode",{parentName:"h3"},"recordsToUpload(limit:)")),Object(l.b)("pre",null,Object(l.b)("code",{parentName:"pre",className:"language-swift"},"func recordsToUpload(limit: Int) -> [CKRecord]\n")),Object(l.b)("p",null,"Provides an array of up to ",Object(l.b)("inlineCode",{parentName:"p"},"limit")," records with changes that need to be uploaded to CloudKit."),Object(l.b)("ul",null,Object(l.b)("li",{parentName:"ul"},"Parameter limit: Maximum number of records that should be provided."),Object(l.b)("li",{parentName:"ul"},"Returns: Array of ",Object(l.b)("inlineCode",{parentName:"li"},"CKRecord"),".")),Object(l.b)("h4",{id:"parameters-3"},"Parameters"),Object(l.b)("table",null,Object(l.b)("thead",{parentName:"table"},Object(l.b)("tr",{parentName:"thead"},Object(l.b)("th",{parentName:"tr",align:null},"Name"),Object(l.b)("th",{parentName:"tr",align:null},"Description"))),Object(l.b)("tbody",{parentName:"table"},Object(l.b)("tr",{parentName:"tbody"},Object(l.b)("td",{parentName:"tr",align:null},"limit"),Object(l.b)("td",{parentName:"tr",align:null},"Maximum number of records that should be provided.")))),Object(l.b)("h3",{id:"diduploadsavedrecords"},Object(l.b)("inlineCode",{parentName:"h3"},"didUpload(savedRecords:)")),Object(l.b)("pre",null,Object(l.b)("code",{parentName:"pre",className:"language-swift"},"func didUpload(savedRecords: [CKRecord])\n")),Object(l.b)("p",null,"Tells the model adapter that these records were uploaded successfully to CloudKit."),Object(l.b)("ul",null,Object(l.b)("li",{parentName:"ul"},"Parameter savedRecords: Records that were saved.")),Object(l.b)("h4",{id:"parameters-4"},"Parameters"),Object(l.b)("table",null,Object(l.b)("thead",{parentName:"table"},Object(l.b)("tr",{parentName:"thead"},Object(l.b)("th",{parentName:"tr",align:null},"Name"),Object(l.b)("th",{parentName:"tr",align:null},"Description"))),Object(l.b)("tbody",{parentName:"table"},Object(l.b)("tr",{parentName:"tbody"},Object(l.b)("td",{parentName:"tr",align:null},"savedRecords"),Object(l.b)("td",{parentName:"tr",align:null},"Records that were saved.")))),Object(l.b)("h3",{id:"recordidsmarkedfordeletionlimit"},Object(l.b)("inlineCode",{parentName:"h3"},"recordIDsMarkedForDeletion(limit:)")),Object(l.b)("pre",null,Object(l.b)("code",{parentName:"pre",className:"language-swift"},"func recordIDsMarkedForDeletion(limit: Int) -> [CKRecord.ID]\n")),Object(l.b)("p",null,"Provides an array of record IDs to be deleted on CloudKit, for model objects that were deleted locally."),Object(l.b)("ul",null,Object(l.b)("li",{parentName:"ul"},"Parameter limit: Maximum number of records that should be provided."),Object(l.b)("li",{parentName:"ul"},"Returns: Array of ",Object(l.b)("inlineCode",{parentName:"li"},"CKRecordID"),".")),Object(l.b)("h4",{id:"parameters-5"},"Parameters"),Object(l.b)("table",null,Object(l.b)("thead",{parentName:"table"},Object(l.b)("tr",{parentName:"thead"},Object(l.b)("th",{parentName:"tr",align:null},"Name"),Object(l.b)("th",{parentName:"tr",align:null},"Description"))),Object(l.b)("tbody",{parentName:"table"},Object(l.b)("tr",{parentName:"tbody"},Object(l.b)("td",{parentName:"tr",align:null},"limit"),Object(l.b)("td",{parentName:"tr",align:null},"Maximum number of records that should be provided.")))),Object(l.b)("h3",{id:"diddeleterecordids"},Object(l.b)("inlineCode",{parentName:"h3"},"didDelete(recordIDs:)")),Object(l.b)("pre",null,Object(l.b)("code",{parentName:"pre",className:"language-swift"},"func didDelete(recordIDs: [CKRecord.ID])\n")),Object(l.b)("p",null,"Tells the model adapter that these record identifiers were deleted successfully from CloudKit."),Object(l.b)("ul",null,Object(l.b)("li",{parentName:"ul"},"Parameter recordIDs: Record IDs that were deleted on CloudKit.")),Object(l.b)("h4",{id:"parameters-6"},"Parameters"),Object(l.b)("table",null,Object(l.b)("thead",{parentName:"table"},Object(l.b)("tr",{parentName:"thead"},Object(l.b)("th",{parentName:"tr",align:null},"Name"),Object(l.b)("th",{parentName:"tr",align:null},"Description"))),Object(l.b)("tbody",{parentName:"table"},Object(l.b)("tr",{parentName:"tbody"},Object(l.b)("td",{parentName:"tr",align:null},"recordIDs"),Object(l.b)("td",{parentName:"tr",align:null},"Record IDs that were deleted on CloudKit.")))),Object(l.b)("h3",{id:"hasrecordid_"},Object(l.b)("inlineCode",{parentName:"h3"},"hasRecordID(_:)")),Object(l.b)("pre",null,Object(l.b)("code",{parentName:"pre",className:"language-swift"},"func hasRecordID(_ recordID: CKRecord.ID) -> Bool\n")),Object(l.b)("p",null,"Asks the model adapter whether it has a local object for the given record identifier."),Object(l.b)("ul",null,Object(l.b)("li",{parentName:"ul"},"Parameter recordID: Record identifier."),Object(l.b)("li",{parentName:"ul"},"Returns: Whether there is a corresponding object for this identifier.")),Object(l.b)("h4",{id:"parameters-7"},"Parameters"),Object(l.b)("table",null,Object(l.b)("thead",{parentName:"table"},Object(l.b)("tr",{parentName:"thead"},Object(l.b)("th",{parentName:"tr",align:null},"Name"),Object(l.b)("th",{parentName:"tr",align:null},"Description"))),Object(l.b)("tbody",{parentName:"table"},Object(l.b)("tr",{parentName:"tbody"},Object(l.b)("td",{parentName:"tr",align:null},"recordID"),Object(l.b)("td",{parentName:"tr",align:null},"Record identifier.")))),Object(l.b)("h3",{id:"didfinishimportwith"},Object(l.b)("inlineCode",{parentName:"h3"},"didFinishImport(with:)")),Object(l.b)("pre",null,Object(l.b)("code",{parentName:"pre",className:"language-swift"},"func didFinishImport(with error: Error?)\n")),Object(l.b)("p",null,"Tells the model adapter that the current import operation finished."),Object(l.b)("ul",null,Object(l.b)("li",{parentName:"ul"},"Parameter error: Optional error, if any error happened.")),Object(l.b)("h4",{id:"parameters-8"},"Parameters"),Object(l.b)("table",null,Object(l.b)("thead",{parentName:"table"},Object(l.b)("tr",{parentName:"thead"},Object(l.b)("th",{parentName:"tr",align:null},"Name"),Object(l.b)("th",{parentName:"tr",align:null},"Description"))),Object(l.b)("tbody",{parentName:"table"},Object(l.b)("tr",{parentName:"tbody"},Object(l.b)("td",{parentName:"tr",align:null},"error"),Object(l.b)("td",{parentName:"tr",align:null},"Optional error, if any error happened.")))),Object(l.b)("h3",{id:"savetoken_"},Object(l.b)("inlineCode",{parentName:"h3"},"saveToken(_:)")),Object(l.b)("pre",null,Object(l.b)("code",{parentName:"pre",className:"language-swift"},"func saveToken(_ token: CKServerChangeToken?)\n")),Object(l.b)("p",null,"Save given token for future use by this adapter."),Object(l.b)("ul",null,Object(l.b)("li",{parentName:"ul"},"Parameter token: ",Object(l.b)("inlineCode",{parentName:"li"},"CKServerChangeToken"))),Object(l.b)("h4",{id:"parameters-9"},"Parameters"),Object(l.b)("table",null,Object(l.b)("thead",{parentName:"table"},Object(l.b)("tr",{parentName:"thead"},Object(l.b)("th",{parentName:"tr",align:null},"Name"),Object(l.b)("th",{parentName:"tr",align:null},"Description"))),Object(l.b)("tbody",{parentName:"table"},Object(l.b)("tr",{parentName:"tbody"},Object(l.b)("td",{parentName:"tr",align:null},"token"),Object(l.b)("td",{parentName:"tr",align:null},Object(l.b)("inlineCode",{parentName:"td"},"CKServerChangeToken"))))),Object(l.b)("h3",{id:"deletechangetracking"},Object(l.b)("inlineCode",{parentName:"h3"},"deleteChangeTracking()")),Object(l.b)("pre",null,Object(l.b)("code",{parentName:"pre",className:"language-swift"},"func deleteChangeTracking()\n")),Object(l.b)("p",null,"Deletes all tracking information and detaches from local model.\nThis adapter should not be used after calling this method, create a new adapter if you wish to synchronize\nthe same model again."),Object(l.b)("h3",{id:"recordfor"},Object(l.b)("inlineCode",{parentName:"h3"},"record(for:)")),Object(l.b)("pre",null,Object(l.b)("code",{parentName:"pre",className:"language-swift"},"func record(for object: AnyObject) -> CKRecord?\n")),Object(l.b)("p",null,"Returns corresponding ",Object(l.b)("inlineCode",{parentName:"p"},"CKRecord")," for the given model object."),Object(l.b)("ul",null,Object(l.b)("li",{parentName:"ul"},"Parameter object: Model object.")),Object(l.b)("h4",{id:"parameters-10"},"Parameters"),Object(l.b)("table",null,Object(l.b)("thead",{parentName:"table"},Object(l.b)("tr",{parentName:"thead"},Object(l.b)("th",{parentName:"tr",align:null},"Name"),Object(l.b)("th",{parentName:"tr",align:null},"Description"))),Object(l.b)("tbody",{parentName:"table"},Object(l.b)("tr",{parentName:"tbody"},Object(l.b)("td",{parentName:"tr",align:null},"object"),Object(l.b)("td",{parentName:"tr",align:null},"Model object.")))),Object(l.b)("h3",{id:"sharefor"},Object(l.b)("inlineCode",{parentName:"h3"},"share(for:)")),Object(l.b)("pre",null,Object(l.b)("code",{parentName:"pre",className:"language-swift"},"@available(iOS 10.0, OSX 10.12, *) func share(for object: AnyObject) -> CKShare?\n")),Object(l.b)("p",null,"Returns CKShare for the given model object, if one exists."),Object(l.b)("ul",null,Object(l.b)("li",{parentName:"ul"},"Parameter object: Model object.")),Object(l.b)("h4",{id:"parameters-11"},"Parameters"),Object(l.b)("table",null,Object(l.b)("thead",{parentName:"table"},Object(l.b)("tr",{parentName:"thead"},Object(l.b)("th",{parentName:"tr",align:null},"Name"),Object(l.b)("th",{parentName:"tr",align:null},"Description"))),Object(l.b)("tbody",{parentName:"table"},Object(l.b)("tr",{parentName:"tbody"},Object(l.b)("td",{parentName:"tr",align:null},"object"),Object(l.b)("td",{parentName:"tr",align:null},"Model object.")))),Object(l.b)("h3",{id:"savesharefor"},Object(l.b)("inlineCode",{parentName:"h3"},"save(share:for:)")),Object(l.b)("pre",null,Object(l.b)("code",{parentName:"pre",className:"language-swift"},"@available(iOS 10.0, OSX 10.12, *) func save(share: CKShare, for object: AnyObject)\n")),Object(l.b)("p",null,"Store CKShare for given model object."),Object(l.b)("ul",null,Object(l.b)("li",{parentName:"ul"},"Parameters:",Object(l.b)("ul",{parentName:"li"},Object(l.b)("li",{parentName:"ul"},"share: ",Object(l.b)("inlineCode",{parentName:"li"},"CKShare")," object to save."),Object(l.b)("li",{parentName:"ul"},"object: Model object.")))),Object(l.b)("h4",{id:"parameters-12"},"Parameters"),Object(l.b)("table",null,Object(l.b)("thead",{parentName:"table"},Object(l.b)("tr",{parentName:"thead"},Object(l.b)("th",{parentName:"tr",align:null},"Name"),Object(l.b)("th",{parentName:"tr",align:null},"Description"))),Object(l.b)("tbody",{parentName:"table"},Object(l.b)("tr",{parentName:"tbody"},Object(l.b)("td",{parentName:"tr",align:null},"share"),Object(l.b)("td",{parentName:"tr",align:null},Object(l.b)("inlineCode",{parentName:"td"},"CKShare")," object to save.")),Object(l.b)("tr",{parentName:"tbody"},Object(l.b)("td",{parentName:"tr",align:null},"object"),Object(l.b)("td",{parentName:"tr",align:null},"Model object.")))),Object(l.b)("h3",{id:"deletesharefor"},Object(l.b)("inlineCode",{parentName:"h3"},"deleteShare(for:)")),Object(l.b)("pre",null,Object(l.b)("code",{parentName:"pre",className:"language-swift"},"@available(iOS 10.0, OSX 10.12, *) func deleteShare(for object: AnyObject)\n")),Object(l.b)("p",null,"Delete existing ",Object(l.b)("inlineCode",{parentName:"p"},"CKShare")," for given model object."),Object(l.b)("ul",null,Object(l.b)("li",{parentName:"ul"},"Parameter object: Model object.")),Object(l.b)("h4",{id:"parameters-13"},"Parameters"),Object(l.b)("table",null,Object(l.b)("thead",{parentName:"table"},Object(l.b)("tr",{parentName:"thead"},Object(l.b)("th",{parentName:"tr",align:null},"Name"),Object(l.b)("th",{parentName:"tr",align:null},"Description"))),Object(l.b)("tbody",{parentName:"table"},Object(l.b)("tr",{parentName:"tbody"},Object(l.b)("td",{parentName:"tr",align:null},"object"),Object(l.b)("td",{parentName:"tr",align:null},"Model object.")))),Object(l.b)("h3",{id:"recordstoupdateparentrelationshipsforroot_"},Object(l.b)("inlineCode",{parentName:"h3"},"recordsToUpdateParentRelationshipsForRoot(_:)")),Object(l.b)("pre",null,Object(l.b)("code",{parentName:"pre",className:"language-swift"},"func recordsToUpdateParentRelationshipsForRoot(_ object: AnyObject) -> [CKRecord]\n")),Object(l.b)("p",null,"Returns a list of records for the given object and any parent records, recursively."),Object(l.b)("ul",null,Object(l.b)("li",{parentName:"ul"},"Parameter object: Model object."),Object(l.b)("li",{parentName:"ul"},"Returns: Array of ",Object(l.b)("inlineCode",{parentName:"li"},"CKRecord"))),Object(l.b)("h4",{id:"parameters-14"},"Parameters"),Object(l.b)("table",null,Object(l.b)("thead",{parentName:"table"},Object(l.b)("tr",{parentName:"thead"},Object(l.b)("th",{parentName:"tr",align:null},"Name"),Object(l.b)("th",{parentName:"tr",align:null},"Description"))),Object(l.b)("tbody",{parentName:"table"},Object(l.b)("tr",{parentName:"tbody"},Object(l.b)("td",{parentName:"tr",align:null},"object"),Object(l.b)("td",{parentName:"tr",align:null},"Model object.")))),Object(l.b)("h2",{id:"notifications"},"Notifications"),Object(l.b)("pre",null,Object(l.b)("code",{parentName:"pre",className:"language-swift"},'public extension Notification.Name {\n    \n    /// Sent by the model adapter when it detects changes to some objects. The notification is sent only once, if there were no changes before and new changes were detected.\n    static let ModelAdapterHasChangesNotification = Notification.Name("QSModelAdapterHasChangesNotification")\n}\n')))}i.isMDXComponent=!0},132:function(e,t,a){"use strict";a.d(t,"a",(function(){return p})),a.d(t,"b",(function(){return j}));var r=a(0),n=a.n(r);function l(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function b(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,r)}return a}function c(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?b(Object(a),!0).forEach((function(t){l(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):b(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function o(e,t){if(null==e)return{};var a,r,n=function(e,t){if(null==e)return{};var a,r,n={},l=Object.keys(e);for(r=0;r<l.length;r++)a=l[r],t.indexOf(a)>=0||(n[a]=e[a]);return n}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(r=0;r<l.length;r++)a=l[r],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(n[a]=e[a])}return n}var d=n.a.createContext({}),i=function(e){var t=n.a.useContext(d),a=t;return e&&(a="function"==typeof e?e(t):c(c({},t),e)),a},p=function(e){var t=i(e.components);return n.a.createElement(d.Provider,{value:t},e.children)},s={inlineCode:"code",wrapper:function(e){var t=e.children;return n.a.createElement(n.a.Fragment,{},t)}},m=n.a.forwardRef((function(e,t){var a=e.components,r=e.mdxType,l=e.originalType,b=e.parentName,d=o(e,["components","mdxType","originalType","parentName"]),p=i(a),m=r,j=p["".concat(b,".").concat(m)]||p[m]||s[m]||l;return a?n.a.createElement(j,c(c({ref:t},d),{},{components:a})):n.a.createElement(j,c({ref:t},d))}));function j(e,t){var a=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var l=a.length,b=new Array(l);b[0]=m;var c={};for(var o in t)hasOwnProperty.call(t,o)&&(c[o]=t[o]);c.originalType=e,c.mdxType="string"==typeof e?e:r,b[1]=c;for(var d=2;d<l;d++)b[d]=a[d];return n.a.createElement.apply(null,b)}return n.a.createElement.apply(null,a)}m.displayName="MDXCreateElement"}}]);