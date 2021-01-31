# XDCCParser-ng
Next Generation XDCC Parser for iroffer-dinoex

Note: This probably still works, but is otherwise not supported.

## About XDCCParser-ng

XDCCParser-ng is a pure Javascript packlist indexer for iroffer-dinoex. This is a rewrite/fork of the original XDCC Parser-Global into a more modern, pure HTML+Javascript page.

XDCCParser-ng provides several advantages over the original XDCC Parser as it can be served with nothing but a static webserver. No CGI required!

It also provides advantages over [uguu/xdccparser](https://github.com/uguu/xdccparser/) as it does not need iroffer to be compiled with Ruby and HTTP server support.

This is currently in development and things are subject to not work.

## INSTALL
This assumes you have basic understanding of webservers and how to configure iroffer.

1. Extract into directory where you want the files served.
2. Configure iroffer to write out an XML file adding `xdccxmlfile /path/to/webserver/root/mybot.xml` to your configuration.

   Ensure that the directory you specify is writable by iroffer.
3. (Optional) If you're running iroffer on a different server than where the html files are being served from. You must allow CORS for the xml file.

   See [this](https://enable-cors.org/server.html) for more ways to configure CORS.

4. Edit `config.json` to point to where the XML file is being served.
5. ????
6. PROFIT

## Pull Requests
Yes.
