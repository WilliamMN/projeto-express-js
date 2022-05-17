const database = require('../database/configuration')

function medidasDashboard(idUsuario) {
  return database.executar(`select tchd.capacidade_total, tmhd.capacidade_atual, tmhd.data_hora, tm.hostname from tb_medida_hard_disk tmhd
            inner join tb_componente_hard_disk tchd on tmhd.fk_componente_hard_disk = tchd.id
            inner join tb_maquina tm on tchd.fk_maquina = tm.id
            inner join tb_usuario tu on tm.fk_usuario = tu.id 
            where tu.id = ${idUsuario}`);
}

function medidasDashboardDeMaquina(idUsuario, idMaquina) {
  return database.executar(`select tchd.capacidade_total, tmhd.capacidade_atual, tmhd.data_hora, tm.hostname from tb_medida_hard_disk tmhd 
            inner join tb_componente_hard_disk tchd on tmhd.fk_componente_hard_disk = tchd.id 
            inner join tb_maquina tm on tchd.fk_maquina = tm.id 
            inner join tb_usuario tu on tm.fk_usuario = tu.id 
            where tu.id = ${idUsuario} and 
            tm.id = ${idMaquina}`);
}

module.exports = {medidasDashboard, medidasDashboardDeMaquina}