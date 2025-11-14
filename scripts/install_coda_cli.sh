#!/usr/bin/env bash

set -euo pipefail

TOKEN=${1:-}
if [[ -z "$TOKEN" ]]; then
  echo "Usage: $0 <AZURE_TOKEN>"
  exit 1
fi

PYTHON=python3.12
ENV_DIR="$HOME/codaenv"
RC_FILE="$HOME/.zshrc"
COMMAND="coda-cli"
ALIAS="coda"

echo "▶︎ Creating virtual environment in $ENV_DIR ..."
mkdir -p "$ENV_DIR"
cd "$ENV_DIR"
$PYTHON -m venv .venv
source .venv/bin/activate

echo "▶︎ Installing CODA from the private feed ..."
python -m pip install "coda[all]" \
  --extra-index-url "https://pypi.org/simple/" \
  --index-url "https://globant:${TOKEN}@pkgs.dev.azure.com/globant-coda/4f87e7d6-53c5-45d6-a208-41c5e6293d99/_packaging/coda-releases/pypi/simple"

add_alias() {
  local ALIAS_LINE=$1
  if ! grep -Fxq "$ALIAS_LINE" "$RC_FILE"; then
    echo "$ALIAS_LINE" >> "$RC_FILE"
    echo "Added ▶︎ $ALIAS_LINE"
  else
    echo "Alias already present ▶︎ $ALIAS_LINE"
  fi
}

echo "▶︎ Updating $RC_FILE ..."
ALIAS_LINE="$ALIAS() { source \"$ENV_DIR/.venv/bin/activate\"; \"$ENV_DIR/.venv/bin/$COMMAND\" \"\$@\"; }"
add_alias "$ALIAS_LINE"

echo "▶︎ Done! To start using '$ALIAS' in this terminal, run:"
echo "source \"$RC_FILE\""
echo "or just open a new terminal."
