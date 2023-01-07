#!/bin/bash

eval "$(conda shell.bash hook)"
conda activate runner


title="Ergou Running"
athlete="Ergou"
title_grid="Over 1km Runs"


python3 scripts/gen_svg.py --from-db --title "$title"  --type github --athlete "$athlete" --special-distance 5 --special-distance2 10 --special-color yellow --special-color2 red --output assets/github.svg --use-localtime --min-distance 0.5

python3 scripts/gen_svg.py --from-db --title "$title_grid" --type grid --athlete "$athlete" --output assets/grid.svg --min-distance 1.0 --special-color yellow --special-color2 red --special-distance 10 --special-distance2 20 --use-localtime

python3 scripts/gen_svg.py --from-db --type circular --use-localtime

