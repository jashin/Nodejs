

var MongoClient = require('mongodb').MongoClient
    , format = require('util').format;

  MongoClient.connect('mongodb://appuser:stageus3r@10.96.48.12:29001/center0', function(err, db) {
    if(err) throw err;

      var collection = db.collection('user');
      for(var i = 12; i <= 12; ++i){
        collection.insert({
          "_class" : "com.everbridge.platform.security.model.User",
          "_id" : i,
          "accountId" : 1332612387831816,
          "answer" : "eb",
          "changePasswordDurationTime" : null,
          "contactId" : 0,
          "contactOrgId" : 0,
          "createdDate" : new Date(),
          "createdId" : 1332612387831830,
          "createdName" : "Limei Li",
          "email" : "steven.zhan@everbridge.com",
          "firstname" : "steven",
          "forgotPasswordExpirationDate" : null,
          "hashAlgorithm" : "BCRYPT",
          "key" : "BAHyNyOdT8Q=",
          "lastModifiedDate" : new Date(),
          "lastModifiedId" : 1332612387831830,
          "lastModifiedName" : "Limei Li",
          "lastname" : "zhan",
          "loginFailureCounter" : 0,
          "middlename" : "",
          "onlineStatus" : "Offline",
          "orgIds" : null,
          "organizationId" : 0,
          "password" : "$2a$12$BGxOU1bq3iHDCEpkZMLCl.KJtY6XPmiJqjrab3EgbtYCSFsEQhj8a",
          "passwordHistory" : {
            "historyPasswords" : [
              "$2a$12$BGxOU1bq3iHDCEpkZMLCl.v2BBQH5TOTYjUMP7kCB.9EpZoqLoG1e",
              "$2a$12$BGxOU1bq3iHDCEpkZMLCl.0HABK6tbbzwtWhNk3XrNtd2uuKUBwKy",
              "$2a$12$BGxOU1bq3iHDCEpkZMLCl.KJtY6XPmiJqjrab3EgbtYCSFsEQhj8a"
            ],
            "changePasswordHistory" : {
              "2014-03-13" : true,
              "2014-07-23" : true
            },
            "mustChangePasswordDate" : new Date("2014-10-21 09:36:35"),
            "isNeedChangePasswordRightNow" : false
          },
          "questionId" : "question_one",
          "registrationInformation" : {
            "registerSuccessDate" : new Date(),
            "inviteDate" : new Date(),
            "expirationDate" : new Date()
          },
          "resourceBundleId" : 2212221690052614,
          "roleIds" : [
            2212221690052614
          ],
          "roleItems" : [
            {
              "roleId" : 2212221690052614,
              "organizationId" : 0
            }
          ],
          "salt" : "$2a$12$BGxOU1bq3iHDCEpkZMLCl.",
          "status" : "A",
          "suffix" : "",
          "timeZoneId" : "America/Chicago",
          "userSessionInfo" : {
            "lastActiveDate" : new Date(),
            "serverId" : "0201",
            "serverIp" : "10.67.30.112",
            "sessionId" : "065748CF44A1767B0394C0F0AAC55AD9-n2"
          },
          "userStatus" : "Active",
          "username" : "gatling_user_" + i,
          "usernameLowerCase" : "gatling_user_" + i
         }, function(err, docs) {

        db.close();
      });
    }
  })
