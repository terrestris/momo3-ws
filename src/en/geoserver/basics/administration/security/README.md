# Security

GeoServer has a robust security subsystem, modeled on Spring Security. Most of
the security features are available through the Web administration interface.
A detailed explanation of all security options is far beyond the goals of this
workshop and the default settings are almost good enough for the basic usage of
GeoServer as well. Here we'll focus on the most important fact after installing
a GeoServer: Changing the default `admin` user and master password. (You may have
recognized the appropriate warnings on the GeoServer welcome page.)

For further instructions please have a look at the official GeoServer
[documentation](http://docs.geoserver.org/latest/en/user/security/webadmin/index.html#security-webadmin).

## Change master password

The master password serves two purposes:
* Protect access to the keystore.
* Protect access to the GeoServer Root account (The root account is always
  active, regardless of the state of the security configuration. Much like its
  UNIX-style counterpart, this account provides "super user" status, and is
  meant to provide an alternative access method for fixing configuration issues.
  The user name for the root account is `root`. Its name cannot be changed.).

To change the master password follow these steps:

1. Go to `Security` &#10093; `Passwords`.
2. Select `Change password`.
3. In the upcoming form use the following values to change the password to
   `momo-ws`:
    * *Current password:* geoserver
    * *New password*/*Confirmation:* momo-ws (Please use a more secure password
      in a real world GeoServer usage!)
4. Click `Change Password`.

## Change admin user password

To change the password for the user `admin` please follow these steps:

1. Go to `Security` &#10093; `Users, Groups, Roles`.
2. Open panel `Users/Groups` where you'll see a list of all current users of your
   GeoServer instance. At the moment (and in most future applications) you'll
   find the user `admin` only.
3. Select the user `admin` by clicking on its username.
3. In the upcoming form use the following values to change the password to
   `momo-ws`:
    * *Password*/*Confirm Password:* momo-ws (Please use a more secure password
      in a real world GeoServer usage!)
   ![Change user password.](../../../assets/security_change_user_pw.png)
4. Click `Save`.
