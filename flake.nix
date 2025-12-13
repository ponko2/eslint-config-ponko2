{
  description = "ESLint Shareable Config";

  inputs = {
    flake-parts.url = "github:hercules-ci/flake-parts";
    nixpkgs.url = "github:NixOS/nixpkgs/nixpkgs-unstable";
  };

  outputs =
    inputs@{ flake-parts, ... }:
    flake-parts.lib.mkFlake { inherit inputs; } {
      systems = [
        "aarch64-darwin"
        "aarch64-linux"
        "x86_64-darwin"
        "x86_64-linux"
      ];
      perSystem =
        { pkgs, ... }:
        let
          packageJSON = pkgs.lib.importJSON ./package.json;
          nodejs =
            pkgs."nodejs_${pkgs.lib.versions.major (pkgs.lib.removePrefix "^" packageJSON.devEngines.runtime.version)}";
          pnpm = pkgs.runCommand "pnpm" { buildInputs = [ nodejs ]; } ''
            mkdir -p $out/bin
            corepack enable pnpm --install-directory=$out/bin
          '';
        in
        {
          devShells.default = pkgs.mkShell {
            packages = with pkgs; [
              nodejs
              pnpm
            ];
          };
          formatter = pkgs.nixfmt-tree;
        };
    };
}
