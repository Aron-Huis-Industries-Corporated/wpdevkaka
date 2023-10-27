ServerEvents.recipes(event => {
    // �������� ������ ���� ������� ItemId
    let ItemId = 'ic2:centrifugal_rare_earth_extractor'
    event.remove({output: ItemId})

    // ���������� ������ ItemId
    let inter = 'ic2:rare_earth_extractor'
    event.recipes.create.sequenced_assembly(
        ItemId
    , 'ic2:advanced_machine_block', [
         event.recipes.create.deploying(inter, [inter, 'ic2:rare_earth_extractor']) //������ ����
        ,event.recipes.create.deploying(inter, [inter, 'ic2:cell_electrolyzed_water']) //������ ����
        ,event.recipes.create.deploying(inter, [inter, 'ic2:cell_electrolyzed_water']) //������ ����
        ,event.recipes.create.pressing(inter, inter) // ������ ������
//        ,event.recipes.create.filling(inter, [inter, Fluid.of('FluidId', 10)]) //������ ��������
//        ,event.recipes.create.cutting(inter, inter) // ������ ����
    ]).transitionalItem(inter).loops(2)  
event.recipes.create.mechanicalCrafting(ItemId, [
    '     ',
    ' CCC ',
    ' ABA ',
    ' CCC ',
    '     '
  ], {
    A: 'ic2:rare_earth_extractor'
   ,B: 'ic2:advanced_machine_block'
   ,C: 'ic2:cell_electrolyzed_water'
//   ,D: ItemD
//   ,E: ItemE
//   ,F: ItemF
//   ,G: ItemG
//   ,H: ItemH
//   ,I: ItemI
  })
})