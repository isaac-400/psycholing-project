let  pkgs = import (builtins.fetchTarball {
       # find the exact commit you want to pin to
       # by default you should use the latest in nixpkgs-unstable branch
       # https://github.com/NixOS/nixpkgs/commits/nixpkgs-unstable
       url = "https://github.com/nixos/nixpkgs/archive/78bce1608960b994405f3696ba086ba1d63654e9.tar.gz";
       sha256 = "0hy3zpx65imj59sg9rplmkzmkzqm1cjibvx2l983s7ks20zf6nnz";
     }) {};

     pythonPackages = pkgs.python39Packages;

in
pkgs.mkShell {
  buildInputs = [
    pythonPackages.pip
    pythonPackages.virtualenv
  ];
  shellHook = ''
  test -d venv || virtualenv venv && source venv/bin/activate
  '';
}
