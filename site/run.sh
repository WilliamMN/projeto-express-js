if [ -d "./node_modules" ]; then
  echo "removendo node modules"
  rm -v -r node_modules
  rm package-lock.json
fi

echo "importando as dependencias"
npm i

code .
clear
npm start