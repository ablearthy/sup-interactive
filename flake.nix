{
  description = "Description";

  inputs = {
    # nixpkgs.url = "github:NixOS/nixpkgs/nixpkgs-unstable";
    flake-utils.url = "github:numtide/flake-utils";
  };

  outputs = { self, nixpkgs, flake-utils }:
    flake-utils.lib.eachDefaultSystem (system:
      let
        pkgs = nixpkgs.legacyPackages.${system};
        devTools = with pkgs; [
          bashInteractive
          
          pkgs.nodejs_22
        ];
      in {
        devShell = pkgs.mkShell ({
          buildInputs = devTools;
        });
      }
    );
}
