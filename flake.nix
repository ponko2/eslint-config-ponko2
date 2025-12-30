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
        { pkgs, system, ... }:
        {
          _module.args.pkgs = import inputs.nixpkgs {
            inherit system;
            overlays = [
              (final: _prev: {
                pnpm = final.runCommand "pnpm" { buildInputs = [ final.corepack ]; } ''
                  mkdir -p $out/bin
                  corepack enable pnpm --install-directory=$out/bin
                '';
              })
            ];
          };
          devShells.default = pkgs.mkShellNoCC {
            packages = with pkgs; [
              editorconfig-checker
              pnpm
              yamllint
            ];
            shellHook = ''
              pnpm install
            '';
          };
          formatter = pkgs.nixfmt-tree;
        };
    };
}
