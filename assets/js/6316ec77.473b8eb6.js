(window.webpackJsonp=window.webpackJsonp||[]).push([[28],{132:function(e,n,t){"use strict";t.d(n,"a",(function(){return d})),t.d(n,"b",(function(){return b}));var r=t(0),a=t.n(r);function o(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function i(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function c(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?i(Object(t),!0).forEach((function(n){o(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):i(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function l(e,n){if(null==e)return{};var t,r,a=function(e,n){if(null==e)return{};var t,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)t=o[r],n.indexOf(t)>=0||(a[t]=e[t]);return a}(e,n);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)t=o[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(a[t]=e[t])}return a}var s=a.a.createContext({}),p=function(e){var n=a.a.useContext(s),t=n;return e&&(t="function"==typeof e?e(n):c(c({},n),e)),t},d=function(e){var n=p(e.components);return a.a.createElement(s.Provider,{value:n},e.children)},u={inlineCode:"code",wrapper:function(e){var n=e.children;return a.a.createElement(a.a.Fragment,{},n)}},h=a.a.forwardRef((function(e,n){var t=e.components,r=e.mdxType,o=e.originalType,i=e.parentName,s=l(e,["components","mdxType","originalType","parentName"]),d=p(t),h=r,b=d["".concat(i,".").concat(h)]||d[h]||u[h]||o;return t?a.a.createElement(b,c(c({ref:n},s),{},{components:t})):a.a.createElement(b,c({ref:n},s))}));function b(e,n){var t=arguments,r=n&&n.mdxType;if("string"==typeof e||r){var o=t.length,i=new Array(o);i[0]=h;var c={};for(var l in n)hasOwnProperty.call(n,l)&&(c[l]=n[l]);c.originalType=e,c.mdxType="string"==typeof e?e:r,i[1]=c;for(var s=2;s<o;s++)i[s]=t[s];return a.a.createElement.apply(null,i)}return a.a.createElement.apply(null,t)}h.displayName="MDXCreateElement"},96:function(e,n,t){"use strict";t.r(n),t.d(n,"frontMatter",(function(){return i})),t.d(n,"metadata",(function(){return c})),t.d(n,"toc",(function(){return l})),t.d(n,"default",(function(){return p}));var r=t(3),a=t(7),o=(t(0),t(132)),i={id:"sharing",title:"Sharing"},c={unversionedId:"sharing",id:"sharing",isDocsHomePage:!1,title:"Sharing",description:"Requirements",source:"@site/docs/sharing.md",slug:"/sharing",permalink:"/SyncKit/sharing",version:"current",sidebar:"docs",previous:{title:"Configuration",permalink:"/SyncKit/configuration"},next:{title:"Architecture",permalink:"/SyncKit/architecture"}},l=[{value:"Requirements",id:"requirements",children:[]},{value:"Configuring records for sharing",id:"configuring-records-for-sharing",children:[]},{value:"Updating existing records",id:"updating-existing-records",children:[]},{value:"Sharing objects",id:"sharing-objects",children:[]},{value:"Accepting shares",id:"accepting-shares",children:[]},{value:"Shares",id:"shares",children:[]}],s={toc:l};function p(e){var n=e.components,t=Object(a.a)(e,["components"]);return Object(o.b)("wrapper",Object(r.a)({},s,t,{components:n,mdxType:"MDXLayout"}),Object(o.b)("h2",{id:"requirements"},"Requirements"),Object(o.b)("p",null,"Your application must support sharing, make sure your Info.plist file has ",Object(o.b)("inlineCode",{parentName:"p"},"CKSharingSupported = YES"),"."),Object(o.b)("h2",{id:"configuring-records-for-sharing"},"Configuring records for sharing"),Object(o.b)("p",null,"Your model classes can conform to ",Object(o.b)("inlineCode",{parentName:"p"},"ParentKey")," and implement its ",Object(o.b)("inlineCode",{parentName:"p"},"static func parentKey() -> String")," to return the name of the property pointing at the parent object. For example:"),Object(o.b)("pre",null,Object(o.b)("code",{parentName:"pre",className:"language-swift"},'class Company: Object {\n    ...\n    let employees = LinkingObjects(fromType: Employee.self, property: "company")\n}\n\nclass Employee: Object, ParentKey {\n    @objc dynamic var company: Company?\n    let addresses = LinkingObjects(fromType: Address.self, property: "employee")\n    \n    static func parentKey() -> String {\n        return "company"\n    }\n}\n\nclass Address: Object, ParentKey {\n    @objc dynamic var employee: Employee?\n    \n    static func parentKey() -> String {\n        return "employee"\n    }\n}\n\n')),Object(o.b)("p",null,"This way, when SyncKit synchronizes your objects it will set the ",Object(o.b)("inlineCode",{parentName:"p"},"parent")," property correctly, so that when you share a ",Object(o.b)("inlineCode",{parentName:"p"},"Company")," object with another user the share will include that company's employees and employee addresses."),Object(o.b)("h2",{id:"updating-existing-records"},"Updating existing records"),Object(o.b)("p",null,"If you specify the ",Object(o.b)("inlineCode",{parentName:"p"},"parentKey")," as mentioned above SyncKit will configure correctly the record hierarchy for ",Object(o.b)("em",{parentName:"p"},"new")," records being uploaded, but you might want to update existing records before using sharing functions \u2013if you were using an older version of SyncKit and want to share an object that had been synchronized already, for example. It is possible to do so by doing:"),Object(o.b)("pre",null,Object(o.b)("code",{parentName:"pre",className:"language-swift"},"\nsynchronizer.reuploadRecordsForChildrenOf(root: yourRootObject) { error in\n    if error == nil {\n        // All records for the root object and its children updated with correct `parent` values\n    }\n}\n")),Object(o.b)("h2",{id:"sharing-objects"},"Sharing objects"),Object(o.b)("p",null,"You can prepare a ",Object(o.b)("inlineCode",{parentName:"p"},"CKShare")," like this:"),Object(o.b)("pre",null,Object(o.b)("code",{parentName:"pre",className:"language-swift"},"// Create CKShare and upload records to CloudKit\nstrongSelf.synchronizer.share(object: object,\n                              publicPermission: .readOnly,\n                              participants: [],\n                              completion: { (share, error) in                            \n                            ...\n                        })\n")),Object(o.b)("p",null,"This will create the share object and upload the object's record and share to CloudKit. Depending on your application this might be all you need to do, or you could pass this share object to a ",Object(o.b)("inlineCode",{parentName:"p"},"UICloudSharingController")," to provide some UI for customization."),Object(o.b)("p",null,"To stop sharing, use:"),Object(o.b)("pre",null,Object(o.b)("code",{parentName:"pre",className:"language-swift"},"// Delete share on CloudKit and remove local data\nstrongSelf.synchronizer.removeShare(object: object,\n                                  completion: { (error) in                            \n                                        ...\n                                    })\n")),Object(o.b)("p",null,"To update the local copy of a share, or remove it (in response to changes made by a ",Object(o.b)("inlineCode",{parentName:"p"},"UICloudSharingController"),", for example) use these:"),Object(o.b)("pre",null,Object(o.b)("code",{parentName:"pre",className:"language-swift"},"func cloudSharingControllerDidSaveShare(_ csc: UICloudSharingController) {\n        \n    guard let share = csc.share else {\n        return\n    }\n    synchronizer.saveShare(share, for: self.editigObject)\n}\n    \nfunc cloudSharingControllerDidStopSharing(_ csc: UICloudSharingController) {\n    \n    synchronizer.deleteShare(for: self.editingObject)\n}\n")),Object(o.b)("h2",{id:"accepting-shares"},"Accepting shares"),Object(o.b)("p",null,"Once a share has been created and sent to a user your UIApplicationDelegate class must be able to accept that share:"),Object(o.b)("pre",null,Object(o.b)("code",{parentName:"pre",className:"language-swift"},'func application(_ application: UIApplication, userDidAcceptCloudKitShareWith cloudKitShareMetadata: CKShareMetadata) {\n        \n        let container = CKContainer(identifier: cloudKitShareMetadata.containerIdentifier)\n        let acceptSharesOperation = CKAcceptSharesOperation(shareMetadatas: [cloudKitShareMetadata])\n        acceptSharesOperation.qualityOfService = .userInteractive\n        acceptSharesOperation.acceptSharesCompletionBlock = { error in\n            if let error = error {\n                DispatchQueue.main.async {\n                    let alertController = UIAlertController(title: "Error", message: "Could not accept CloudKit share: \\(error.localizedDescription)", preferredStyle: .alert)\n                    alertController.addAction(UIAlertAction(title: "OK", style: .default, handler: nil))\n                }\n            } else {\n                // Ready to synchronize\n            }\n        }\n        container.add(acceptSharesOperation)\n    }\n')),Object(o.b)("p",null,"At that point the share has been accepted and records can be downloaded from the container's shared database. You can use a synchronizer to do this:"),Object(o.b)("pre",null,Object(o.b)("code",{parentName:"pre",className:"language-swift"},'var sharedSynchronizer: CloudKitSynchronizer! = CloudKitSynchronizer.sharedSynchronizer(containerName: "your-container-name", configuration: self.realmConfiguration)\n\n...\n\nsharedSynchronizer.synchronize { error in \n    \n}\n')),Object(o.b)("p",null,"When user A accepts a share from user B a new record zone is created in user A's shared database for user B's records. As a result, multiple record zones could be created in the shared database. Each time a ",Object(o.b)("inlineCode",{parentName:"p"},"CloudKitSynchronizer")," encounters a new record zone it will ask its ",Object(o.b)("inlineCode",{parentName:"p"},"CloudKitSynchronizerAdapterProvider")," for a ",Object(o.b)("inlineCode",{parentName:"p"},"ModelAdapter")," to handle changes in that record zone. The default provider will create a new Core Data stack or Realm for the record zone, as well as a model adapter.\nTherefore, one option to access this shared data would be to access each data stack through the synchronizer's adapters (see ",Object(o.b)("a",{parentName:"p",href:"https://github.com/mentrena/SyncKit/wiki/Architecture"},"Architecture"),")"),Object(o.b)("p",null,"To make this easier, you can configure a results controller that will surface data obtained from the shared database and will update the results when data gets synchronized. In the case of Core Data, there's ",Object(o.b)("inlineCode",{parentName:"p"},"CoreDataMultiFetchedResultsController")," to provide an array of ",Object(o.b)("inlineCode",{parentName:"p"},"NSFetchedResultsController"),", and in the case of Realm there's ",Object(o.b)("inlineCode",{parentName:"p"},"MultiRealmResultsController")," to provide an array of ",Object(o.b)("inlineCode",{parentName:"p"},"Results<T>")," (RealmSwift) or ",Object(o.b)("inlineCode",{parentName:"p"},"RLMResults")," (Realm)"),Object(o.b)("pre",null,Object(o.b)("code",{parentName:"pre",className:"language-swift"},'// Core Data\nlet fetchRequest = NSFetchRequest<NSFetchRequestResult>(entityName: "QSCompany")\nfetchRequest.sortDescriptors = [NSSortDescriptor(key: "name", ascending: true)]\nlet fetchedResultsController = synchronizer.multiFetchedResultsController(fetchRequest: fetchRequest)\nfetchedResultsController.delegate = self\n\n...\n\n// Delegate\nfunc multiFetchedResultsControllerDidChangeControllers(_ controller: CoreDataMultiFetchedResultsController) {\n    // reload data\n}\n    \nfunc controllerDidChangeContent(_ controller: NSFetchedResultsController<NSFetchRequestResult>) {\n    // reload data\n}\n')),Object(o.b)("pre",null,Object(o.b)("code",{parentName:"pre",className:"language-swift"},"// Realm\nresultsController = synchronizer.multiRealmResultsController()\nresultsController.didChangeRealms = { [weak self] controller in\n    self?.tableView.reloadData()\n}\n\n")),Object(o.b)("h2",{id:"shares"},"Shares"),Object(o.b)("p",null,"For existing objects you can check if they have been shared by calling"),Object(o.b)("pre",null,Object(o.b)("code",{parentName:"pre",className:"language-swift"},"@objc func share(for object: AnyObject) -> CKShare?\n")),Object(o.b)("p",null,Object(o.b)("inlineCode",{parentName:"p"},"CloudKitSynchronizer")," will check the model adapter that manages that object and return the share if it exists. You then can present it using a ",Object(o.b)("inlineCode",{parentName:"p"},"UICloudSharingController"),", for example."))}p.isMDXComponent=!0}}]);