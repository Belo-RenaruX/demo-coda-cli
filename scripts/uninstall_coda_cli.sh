#!/usr/bin/env bash

set -euo pipefail

ENV_DIR="$HOME/codaenv"
CODA_DIR="$HOME/.coda"
RC_FILE="$HOME/.zshrc"
ALIAS="coda"

if [[ "${VIRTUAL_ENV:-}" == "$ENV_DIR/.venv" ]]; then
  echo "▶ Deactivating virtual environment in $ENV_DIR ..."
  deactivate || true
fi

if [[ -d "$ENV_DIR" ]]; then
  echo "▶ Removing virtual environment directory: $ENV_DIR"
  rm -rf "$ENV_DIR"
else
  echo "▶ Virtual environment not found, skipping"
fi

if [[ -d "$CODA_DIR" ]]; then
  echo "▶ Removing coda configuration directory: $CODA_DIR"
  rm -rf "$CODA_DIR"
else
  echo "▶ ~/.coda not found, skipping"
fi

remove_line() {
  local PATTERN="$1"
  if grep -q "$PATTERN" "$RC_FILE"; then
    local TEMP_FILE
    TEMP_FILE="$(mktemp)"
    echo "▶ Removing entry from $RC_FILE: $PATTERN"

    while IFS='' read -r line; do
      if [[ "$line" == "$PATTERN"* ]]; then
        continue
      fi
      printf '%s\n' "$line" >> "$TEMP_FILE"
    done < "$RC_FILE"

    mv "$TEMP_FILE" "$RC_FILE"
  else
    echo "▶ Entry not found in $RC_FILE: $PATTERN"
  fi
}

echo "▶ Cleaning $RC_FILE ..."
remove_line "$ALIAS()"

echo "▶︎ Done! Uninstall complete, run:"
echo "source \"$RC_FILE\""
echo "or just open a new terminal."
