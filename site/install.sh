if [ -d "./git" ]; then
  echo "buscando atualizações no repositório"
  git pull
else 
  echo "baixando o repositório"
  if [ -d "./projeto" ]; then
    rm -fv -r projeto
  fi 
  echo "projeto baixado no diretório ~/"
  mkdir ~/projeto
  cd ~/projeto
  git clone https://github.com/WilliamMN/projeto-express-js.git
  read -p "Criar arquivo env? " input
  if [ "${input}" = "sim" ]; then
  touch ~/projeto/projeto-express-js/.env
  echo "AMBIENTE=dev" >> ~/projeto/projeto-express-js/.env
  echo "PORTA=8080" >> ~/projeto/projeto-express-js/.env
  fi
fi