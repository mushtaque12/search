#!/bin/bash

export TIME=$(date +%Y-%m-%d_%H-%H-%S)
export CONSOLE_LOG="/tmp/docker-entrypoint_console+${TIME}.log"
npm start