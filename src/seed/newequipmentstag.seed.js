const newEquipmentTags = [
    {
        equipment_tag: 'Cup-L2-HVAC-COT-001',
        type: 'Cooling Tower',
        location: 'CUP',
        sub_location: 'Chiller Room',
        cobie_tag: 'CUP-L2-2C-11-HVAC-COT-001-002'
    },
    {
        equipment_tag: 'Cup-L2-HVAC-COT-002',
        type: 'Cooling Tower',
        location: 'CUP',
        sub_location: 'Chiller Room',
        cobie_tag: 'CUP-L2-2C-11-HVAC-COT-001-004'
    },
    {
        equipment_tag: 'Cup-L2-HVAC-COT-003',
        type: 'Cooling Tower',
        location: 'CUP',
        sub_location: 'Chiller Room',
        cobie_tag: 'CUP-L2-2C-11-HVAC-COT-001-001'
    },
    {
        equipment_tag: 'Cup-L2-HVAC-COT-004',
        type: 'Cooling Tower',
        location: 'CUP',
        sub_location: 'Chiller Room',
        cobie_tag: 'CUP-L2-2C-11-HVAC-COT-001-003'
    },
    {
        equipment_tag: 'T2-L0-MER1-HVAC-AHU-001',
        type: 'AHU',
        location: 'Terminal',
        sub_location: 'MER 1',
        cobie_tag: 'T2-L0-0T31-07-HVAC-AHU-001-001'
    },
    {
        equipment_tag: 'T2-L0-MER1-HVAC-AHU-002',
        type: 'AHU',
        location: 'Terminal',
        sub_location: 'MER 1',
        cobie_tag: 'T2-L0-0T31-07-HVAC-AHU-004-001'
    },
    {
        equipment_tag: 'T2-L0-MER1-HVAC-AHU-003',
        type: 'AHU',
        location: 'Terminal',
        sub_location: 'MER 1',
        cobie_tag: 'T2-L0-0T31-07-HVAC-AHU-005-001'
    },
    {
        equipment_tag: 'T2-L0-MER1-HVAC-AHU-004',
        type: 'AHU',
        location: 'Terminal',
        sub_location: 'MER 1',
        cobie_tag: 'T2-L0-0T31-07-HVAC-AHU-006-001'
    },
    {
        equipment_tag: 'T2-L0-MER1-HVAC-AHU-005',
        type: 'AHU',
        location: 'Terminal',
        sub_location: 'MER 1',
        cobie_tag: 'T2-L0-0T31-07-HVAC-AHU-002-001'
    },
    {
        equipment_tag: 'T2-L0-MER1-HVAC-AHU-006',
        type: 'AHU',
        location: 'Terminal',
        sub_location: 'MER 1',
        cobie_tag: 'T2-L0-0T31-07-HVAC-AHU-007-001'
    },
    {
        equipment_tag: 'T2-L0-MER1-HVAC-AHU-007',
        type: 'AHU',
        location: 'Terminal',
        sub_location: 'MER 1',
        cobie_tag: 'T2-L0-0T31-07-HVAC-AHU-003-001'
    },
    {
        equipment_tag: 'T2-L0-MER1-HVAC-DOAS-001',
        type: 'DOAS',
        location: 'Terminal',
        sub_location: 'MER 1',
        cobie_tag: 'T2-L0-0T31-07-HVAC-DOAS-001-001'
    },
    {
        equipment_tag: 'T2-L0-MER2-HVAC-AHU-001',
        type: 'AHU',
        location: 'Terminal',
        sub_location: 'MER 2',
        cobie_tag: 'T2-L0-0T61-03-HVAC-AHU-009-001'
    },
    {
        equipment_tag: 'T2-L0-MER2-HVAC-AHU-002',
        type: 'AHU',
        location: 'Terminal',
        sub_location: 'MER 2',
        cobie_tag: 'T2-L0-0T61-03-HVAC-AHU-011-001'
    },
    {
        equipment_tag: 'T2-L0-MER2-HVAC-AHU-003',
        type: 'AHU',
        location: 'Terminal',
        sub_location: 'MER 2',
        cobie_tag: 'T2-L0-0T51-01-HVAC-AHU-010-001'
    },
    {
        equipment_tag: 'T2-L0-MER3-HVAC-AHU-001',
        type: 'AHU',
        location: 'Terminal',
        sub_location: 'MER 3',
        cobie_tag: 'T2-L0-0T61-07-HVAC-AHU-017-001'
    },
    {
        equipment_tag: 'T2-L0-MER3-HVAC-AHU-002',
        type: 'AHU',
        location: 'Terminal',
        sub_location: 'MER 3',
        cobie_tag: 'T2-L0-0T61-07-HVAC-AHU-015-001'
    },
    {
        equipment_tag: 'T2-L0-MER3-HVAC-AHU-003',
        type: 'AHU',
        location: 'Terminal',
        sub_location: 'MER 3',
        cobie_tag: 'T2-L0-0T61-07-HVAC-AHU-012-001'
    },
    {
        equipment_tag: 'T2-L0-MER3-HVAC-AHU-004',
        type: 'AHU',
        location: 'Terminal',
        sub_location: 'MER 3',
        cobie_tag: 'T2-L0-0T61-07-HVAC-AHU-016-001'
    },
    {
        equipment_tag: 'T2-L0-MER3-HVAC-AHU-005',
        type: 'AHU',
        location: 'Terminal',
        sub_location: 'MER 3',
        cobie_tag: 'T2-L0-0T61-07-HVAC-AHU-013-001'
    },
    {
        equipment_tag: 'T2-L0-MER3-HVAC-AHU-006',
        type: 'AHU',
        location: 'Terminal',
        sub_location: 'MER 3',
        cobie_tag: 'T2-L0-0T61-07-HVAC-AHU-014-001'
    },
    {
        equipment_tag: 'T2-L0-MER4-HVAC-AHU-001',
        type: 'AHU',
        location: 'Terminal',
        sub_location: 'MER 4',
        cobie_tag: 'T2-L0-0T63-01-HVAC-AHU-026-001'
    },
    {
        equipment_tag: 'T2-L0-MER4-HVAC-AHU-002',
        type: 'AHU',
        location: 'Terminal',
        sub_location: 'MER 4',
        cobie_tag: 'T2-L0-0T63-01-HVAC-AHU-027-001'
    },
    {
        equipment_tag: 'CUP-L0-0C-01-HVAC-PMPC-001',
        type: 'Condenser Pump',
        location: 'CUP',
        sub_location: 'Chiller Room',
        cobie_tag: 'CUP-L0-0C-01-HVAC-PMPC-001-001'
    },
    {
        equipment_tag: 'CUP-L0-0C-01-HVAC-PMPC-002',
        type: 'Condenser Pump',
        location: 'CUP',
        sub_location: 'Chiller Room',
        cobie_tag: 'CUP-L0-0C-01-HVAC-PMPC-001-002'
    },
    {
        equipment_tag: 'CUP-L0-0C-01-HVAC-PMPC-003',
        type: 'Condenser Pump',
        location: 'CUP',
        sub_location: 'Chiller Room',
        cobie_tag: 'CUP-L0-0C-01-HVAC-PMPC-001-003'
    },
    {
        equipment_tag: 'CUP-L0-0C-01-HVAC-PMPC-004',
        type: 'Condenser Pump',
        location: 'CUP',
        sub_location: 'Chiller Room',
        cobie_tag: 'CUP-L0-0C-01-HVAC-PMPC-001-004'
    },
    {
        equipment_tag: 'CUP-L0-0C-01-HVAC-PMPC-005',
        type: 'Condenser Pump',
        location: 'CUP',
        sub_location: 'Chiller Room',
        cobie_tag: 'CUP-L0-0C-01-HVAC-PMPC-001-005'
    },
    {
        equipment_tag: 'CUP-L0-0C-01-HVAC-PMPP-001',
        type: 'Primary Pump',
        location: 'CUP',
        sub_location: 'Chiller Room',
        cobie_tag: 'CUP-L0-0C-01-HVAC-PMPP-001-001'
    },
    {
        equipment_tag: 'CUP-L0-0C-01-HVAC-PMPP-002',
        type: 'Primary Pump',
        location: 'CUP',
        sub_location: 'Chiller Room',
        cobie_tag: 'CUP-L0-0C-01-HVAC-PMPP-001-002'
    },
    {
        equipment_tag: 'CUP-L0-0C-01-HVAC-PMPP-003',
        type: 'Primary Pump',
        location: 'CUP',
        sub_location: 'Chiller Room',
        cobie_tag: 'CUP-L0-0C-01-HVAC-PMPP-001-003'
    },
    {
        equipment_tag: 'CUP-L0-0C-01-HVAC-PMPP-004',
        type: 'Primary Pump',
        location: 'CUP',
        sub_location: 'Chiller Room',
        cobie_tag: 'CUP-L0-0C-01-HVAC-PMPP-001-004'
    },
    {
        equipment_tag: 'CUP-L0-0C-01-HVAC-PMPP-005',
        type: 'Primary Pump',
        location: 'CUP',
        sub_location: 'Chiller Room',
        cobie_tag: 'CUP-L0-0C-01-HVAC-PMPP-001-005'
    },
    {
        equipment_tag: 'T2-L0-MER4-HVAC-AHU-003',
        type: 'AHU',
        location: 'Terminal',
        sub_location: 'MER 4',
        cobie_tag: 'T2-L0-0T63-01-HVAC-AHU-028-001'
    },
    {
        equipment_tag: 'T2-L0-MER4-HVAC-AHU-004',
        type: 'AHU',
        location: 'Terminal',
        sub_location: 'MER 4',
        cobie_tag: 'T2-L0-0T63-01-HVAC-AHU-029-001'
    },
    {
        equipment_tag: 'T2-L0-MER4-HVAC-AHU-005',
        type: 'AHU',
        location: 'Terminal',
        sub_location: 'MER 4',
        cobie_tag: 'T2-L0-0T63-01-HVAC-AHU-030-001'
    },
    {
        equipment_tag: 'T2-L0-MER4-HVAC-AHU-006',
        type: 'AHU',
        location: 'Terminal',
        sub_location: 'MER 4',
        cobie_tag: 'T2-L0-0T63-01-HVAC-AHU-031-001'
    },
    {
        equipment_tag: 'T2-L0-MER4-HVAC-AHU-007',
        type: 'AHU',
        location: 'Terminal',
        sub_location: 'MER 4',
        cobie_tag: 'T2-L0-0T63-01-HVAC-AHU-032-001'
    },
    {
        equipment_tag: 'T2-L0-MER4-HVAC-AHU-008',
        type: 'AHU',
        location: 'Terminal',
        sub_location: 'MER 4',
        cobie_tag: 'T2-L0-0T63-01-HVAC-AHU-033-001'
    },
    {
        equipment_tag: 'T2-L0-MER4-HVAC-AHU-009',
        type: 'AHU',
        location: 'Terminal',
        sub_location: 'MER 4',
        cobie_tag: 'T2-L0-0T63-01-HVAC-AHU-034-001'
    },
    {
        equipment_tag: 'T2-L0-MER4-HVAC-AHU-010',
        type: 'AHU',
        location: 'Terminal',
        sub_location: 'MER 4',
        cobie_tag: 'T2-L0-0T63-01-HVAC-AHU-041-001'
    },
    {
        equipment_tag: 'T2-L0-MER4-HVAC-AHU-011',
        type: 'AHU',
        location: 'Terminal',
        sub_location: 'MER 4',
        cobie_tag: 'T2-L0-0T63-01-HVAC-AHU-035-001'
    },
    {
        equipment_tag: 'T2-L0-MER4-HVAC-AHU-012',
        type: 'AHU',
        location: 'Terminal',
        sub_location: 'MER 4',
        cobie_tag: 'T2-L0-0T63-01-HVAC-AHU-042-001'
    },
    {
        equipment_tag: 'T2-L0-MER4-HVAC-AHU-013',
        type: 'AHU',
        location: 'Terminal',
        sub_location: 'MER 4',
        cobie_tag: 'T2-L0-0T63-01-HVAC-AHU-036-001'
    },
    {
        equipment_tag: 'T2-L0-MER4-HVAC-AHU-014',
        type: 'AHU',
        location: 'Terminal',
        sub_location: 'MER 4',
        cobie_tag: 'T2-L0-0T63-01-HVAC-AHU-037-001'
    },
    {
        equipment_tag: 'T2-L0-MER4-HVAC-AHU-015',
        type: 'AHU',
        location: 'Terminal',
        sub_location: 'MER 4',
        cobie_tag: 'T2-L0-0T63-01-HVAC-AHU-043-001'
    },
    {
        equipment_tag: 'CUP-L0-0C-01-HVAC-PMPS-001',
        type: 'Secondary Pump',
        location: 'CUP',
        sub_location: 'Chiller Room',
        cobie_tag: 'CUP-L0-0C-01-HVAC-PMPS-001-001'
    },
    {
        equipment_tag: 'CUP-L0-0C-01-HVAC-PMPS-002',
        type: 'Secondary Pump',
        location: 'CUP',
        sub_location: 'Chiller Room',
        cobie_tag: 'CUP-L0-0C-01-HVAC-PMPS-001-002'
    },
    {
        equipment_tag: 'CUP-L0-0C-01-HVAC-PMPS-003',
        type: 'Secondary Pump',
        location: 'CUP',
        sub_location: 'Chiller Room',
        cobie_tag: 'CUP-L0-0C-01-HVAC-PMPS-001-003'
    },
    {
        equipment_tag: 'CUP-L0-0C-01-HVAC-PMPS-004',
        type: 'Secondary Pump',
        location: 'CUP',
        sub_location: 'Chiller Room',
        cobie_tag: 'CUP-L0-0C-01-HVAC-PMPS-001-004'
    },
    {
        equipment_tag: 'CUP-L0-0C-01-HVAC-PMPS-005',
        type: 'Secondary Pump',
        location: 'CUP',
        sub_location: 'Chiller Room',
        cobie_tag: 'CUP-L0-0C-01-HVAC-PMPS-001-005'
    },
    {
        equipment_tag: 'T2-L0-MER4-HVAC-AHU-016',
        type: 'AHU',
        location: 'Terminal',
        sub_location: 'MER 4',
        cobie_tag: 'T2-L0-0T63-01-HVAC-AHU-044-001'
    },
    {
        equipment_tag: 'T2-L0-MER4-HVAC-AHU-017',
        type: 'AHU',
        location: 'Terminal',
        sub_location: 'MER 4',
        cobie_tag: 'T2-L0-0T63-01-HVAC-AHU-038-001'
    },
    {
        equipment_tag: 'T2-L0-MER4-HVAC-AHU-018',
        type: 'AHU',
        location: 'Terminal',
        sub_location: 'MER 4',
        cobie_tag: 'T2-L0-0T63-01-HVAC-AHU-045-001'
    },
    {
        equipment_tag: 'T2-L0-MER4-HVAC-AHU-019',
        type: 'AHU',
        location: 'Terminal',
        sub_location: 'MER 4',
        cobie_tag: 'T2-L0-0T63-01-HVAC-AHU-039-001'
    },
    {
        equipment_tag: 'T2-L0-MER4-HVAC-AHU-020',
        type: 'AHU',
        location: 'Terminal',
        sub_location: 'MER 4',
        cobie_tag: 'T2-L0-0T63-01-HVAC-AHU-055-001'
    },
    {
        equipment_tag: 'T2-L0-MER4-HVAC-AHU-022',
        type: 'AHU',
        location: 'Terminal',
        sub_location: 'MER 4',
        cobie_tag: 'T2-L0-0T63-01-HVAC-AHU-040-001'
    },
    {
        equipment_tag: 'T2-L0-MER4-HVAC-MUA-001',
        type: 'MUA',
        location: 'Terminal',
        sub_location: 'MER 4',
        cobie_tag: 'T2-L0-0T63-01-HVAC-AHU-049-001'
    },
    {
        equipment_tag: 'T2-L0-MER4-HVAC-MUA-002',
        type: 'MUA',
        location: 'Terminal',
        sub_location: 'MER 4',
        cobie_tag: 'T2-L0-0T63-01-HVAC-AHU-050-001'
    },
    {
        equipment_tag: 'T2-L0-MER4-HVAC-MUA-003',
        type: 'MUA',
        location: 'Terminal',
        sub_location: 'MER 4',
        cobie_tag: 'T2-L0-0T63-01-HVAC-AHU-051-001'
    },
    {
        equipment_tag: 'T2-L0-MER4-HVAC-MUA-004',
        type: 'MUA',
        location: 'Terminal',
        sub_location: 'MER 4',
        cobie_tag: 'T2-L0-0T63-01-HVAC-AHU-052-001'
    },
    {
        equipment_tag: 'T2-L0-MER4-HVAC-MUA-005',
        type: 'MUA',
        location: 'Terminal',
        sub_location: 'MER 4',
        cobie_tag: 'T2-L0-0T63-01-HVAC-AHU-053-001'
    },
    {
        equipment_tag: 'T2-L0-MER4-HVAC-MUA-006',
        type: 'MUA',
        location: 'Terminal',
        sub_location: 'MER 4',
        cobie_tag: 'T2-L0-0T63-01-HVAC-AHU-054-001'
    },
    {
        equipment_tag: 'T2-L0-MER4-HVAC-DOAS-001',
        type: 'DOAS',
        location: 'Terminal',
        sub_location: 'MER 4',
        cobie_tag: 'T2-L0-0T63-01-HVAC-DOAS-002-001'
    },
    {
        equipment_tag: 'T2-L0-MER4-HVAC-DOAS-002',
        type: 'DOAS',
        location: 'Terminal',
        sub_location: 'MER 4',
        cobie_tag: 'T2-L0-0T63-01-HVAC-DOAS-003-001'
    },
    {
        equipment_tag: 'T2-L0-MER4-HVAC-DOAS-003',
        type: 'DOAS',
        location: 'Terminal',
        sub_location: 'MER 4',
        cobie_tag: 'T2-L0-0T63-01-HVAC-DOAS-004-001'
    },
    {
        equipment_tag: 'T2-L0-MER4-HVAC-DOAS-005',
        type: 'DOAS',
        location: 'Terminal',
        sub_location: 'MER 4',
        cobie_tag: 'T2-L0-0T63-01-HVAC-DOAS-005-001'
    },
    {
        equipment_tag: 'T2-L0-MER4-HVAC-DOAS-006',
        type: 'DOAS',
        location: 'Terminal',
        sub_location: 'MER 4',
        cobie_tag: 'T2-L0-0T63-01-HVAC-DOAS-006-001'
    },
    {
        equipment_tag: 'T2-L0-MER4-HVAC-DOAS-007',
        type: 'DOAS',
        location: 'Terminal',
        sub_location: 'MER 4',
        cobie_tag: 'T2-L0-0T63-01-HVAC-DOAS-007-001'
    },
    {
        equipment_tag: 'T2-L0-MER4-HVAC-DOAS-008',
        type: 'DOAS',
        location: 'Terminal',
        sub_location: 'MER 4',
        cobie_tag: 'T2-L0-0T63-01-HVAC-DOAS-010-001'
    },
    {
        equipment_tag: 'CUP-L2-HVAC-WTS-002',
        type: 'Side Stream Filter',
        location: 'CUP',
        sub_location: 'Chiller Room',
        cobie_tag: 'CUP-L0-0C-01-HVAC-SSFS-001-001'
    },
    {
        equipment_tag: 'CUP- building L-0 chiller plant',
        type: 'ATCS',
        location: 'CUP',
        sub_location: 'Chiller Room',
        cobie_tag: 'CUP-L0-0C-01-HVAC-BC-001-001'
    },
    {
        equipment_tag: 'CUP-L0-CET-01',
        type: 'Expansion Tank',
        location: 'CUP',
        sub_location: 'Chiller Room',
        cobie_tag: 'CUP-L0-0C-01-HVAC-PET-001-001'
    },
    {
        equipment_tag: 'CUP-L0-PRE-01',
        type: 'Pressurization Tank',
        location: 'CUP',
        sub_location: 'Chiller Room',
        cobie_tag: ''
    },
    {
        equipment_tag: 'CUP-L0-VDEG',
        type: 'Vaccuum Degasser',
        location: 'CUP',
        sub_location: 'Chiller Room',
        cobie_tag: 'CUP-L0-0C-01-HVAC-VD-001-001'
    },
    {
        equipment_tag: 'CUP-L0-ECST-01',
        type: 'Electro Chemical Scale Treatment',
        location: 'CUP',
        sub_location: 'Chiller Room',
        cobie_tag: 'CUP-L0-0C-01-HVAC-ECTS-001-001'
    },
    {
        equipment_tag: 'CUP-L0-CDS-01',
        type: 'Chemical Dosing System-CHW',
        location: 'CUP',
        sub_location: 'Chiller Room',
        cobie_tag: 'CUP-L0-0C-01-HVAC-CDS-001-001'
    },
    {
        equipment_tag: 'T2-L0-MER4-HVAC-DOAS-009',
        type: 'DOAS',
        location: 'Terminal',
        sub_location: 'MER 4',
        cobie_tag: 'T2-L0-0T63-01-HVAC-DOAS-011-001'
    },
    {
        equipment_tag: 'T2-L0-MER4-HVAC-DOAS-010',
        type: 'DOAS',
        location: 'Terminal',
        sub_location: 'MER 4',
        cobie_tag: 'T2-L0-0T63-01-HVAC-DOAS-008-001'
    },
    {
        equipment_tag: 'T2-L0-MER4-HVAC-DOAS-011',
        type: 'DOAS',
        location: 'Terminal',
        sub_location: 'MER 4',
        cobie_tag: 'T2-L0-0T63-01-HVAC-DOAS-009-001'
    },
    {
        equipment_tag: 'T2-L0-MER4-HVAC-DOAS-012',
        type: 'DOAS',
        location: 'Terminal',
        sub_location: 'MER 4',
        cobie_tag: 'T2-L0-0T63-01-HVAC-DOAS-012-001'
    },
    {
        equipment_tag: 'T2-L0-MER5-HVAC-AHU-001',
        type: 'AHU',
        location: 'Terminal',
        sub_location: 'MER 5',
        cobie_tag: 'T2-L0-0T33-15-HVAC-AHU-056-001'
    },
    {
        equipment_tag: 'T2-L0-MER5-HVAC-AHU-002',
        type: 'AHU',
        location: 'Terminal',
        sub_location: 'MER 5',
        cobie_tag: 'T2-L0-0T33-15-HVAC-AHU-057-001'
    },
    {
        equipment_tag: 'T2-L0-MER5-HVAC-AHU-003',
        type: 'AHU',
        location: 'Terminal',
        sub_location: 'MER 5',
        cobie_tag: 'T2-L0-0T33-15-HVAC-AHU-058-001'
    },
    {
        equipment_tag: 'T2-L0-MER5-HVAC-DOAS-001',
        type: 'DOAS',
        location: 'Terminal',
        sub_location: 'MER-5',
        cobie_tag: 'T2-L0-0T33-15-HVAC-DOAS-013-001'
    },
    {
        equipment_tag: 'T2-L0-MER6-HVAC-AHU-001',
        type: 'AHU',
        location: 'Terminal',
        sub_location: 'MER 6',
        cobie_tag: 'T2-L0-0T45-16-HVAC-AHU-062-001'
    },
    {
        equipment_tag: 'T2-L0-MER6-HVAC-AHU-002',
        type: 'AHU',
        location: 'Terminal',
        sub_location: 'MER 6',
        cobie_tag: 'T2-L0-0T45-16-HVAC-AHU-060-001'
    },
    {
        equipment_tag: 'T2-L0-MER6-HVAC-AHU-003',
        type: 'AHU',
        location: 'Terminal',
        sub_location: 'MER 6',
        cobie_tag: 'T2-L0-0T45-16-HVAC-AHU-061-001'
    },
    {
        equipment_tag: 'T2-L1-MER7-HVAC-AHU-001',
        type: 'AHU',
        location: 'Terminal',
        sub_location: 'MER 7',
        cobie_tag: 'T2-L1-1T13-01-HVAC-AHU-064-001'
    },
    {
        equipment_tag: 'T2-L1-MER7-HVAC-AHU-003',
        type: 'AHU',
        location: 'Terminal',
        sub_location: 'MER 7',
        cobie_tag: 'T2-L1-1T13-01-HVAC-AHU-065-001'
    },
    {
        equipment_tag: 'T2-L1-MER7-HVAC-AHU-004',
        type: 'AHU',
        location: 'Terminal',
        sub_location: 'MER 7',
        cobie_tag: 'T2-L1-1T13-01-HVAC-AHU-066-001'
    },
    {
        equipment_tag: 'T2-L1-MER7-HVAC-AHU-005',
        type: 'AHU',
        location: 'Terminal',
        sub_location: 'MER 7',
        cobie_tag: 'T2-L1-1T13-01-HVAC-AHU-074-001'
    },
    {
        equipment_tag: 'T2-L1-MER7-HVAC-AHU-006',
        type: 'AHU',
        location: 'Terminal',
        sub_location: 'MER 7',
        cobie_tag: 'T2-L1-1T13-01-HVAC-AHU-067-001'
    },
    {
        equipment_tag: 'T2-L1-MER7-HVAC-AHU-007',
        type: 'AHU',
        location: 'Terminal',
        sub_location: 'MER 7',
        cobie_tag: 'T2-L1-1T13-01-HVAC-AHU-068-001'
    },
    {
        equipment_tag: 'T2-L1-MER7-HVAC-AHU-008',
        type: 'AHU',
        location: 'Terminal',
        sub_location: 'MER 7',
        cobie_tag: 'T2-L1-1T13-01-HVAC-AHU-069-001'
    },
    {
        equipment_tag: 'T2-L1-MER7-HVAC-AHU-009',
        type: 'AHU',
        location: 'Terminal',
        sub_location: 'MER 7',
        cobie_tag: 'T2-L1-1T13-01-HVAC-AHU-070-001'
    },
    {
        equipment_tag: 'T2-L1-MER7-HVAC-AHU-010',
        type: 'AHU',
        location: 'Terminal',
        sub_location: 'MER 7',
        cobie_tag: 'T2-L1-1T13-01-HVAC-AHU-071-001'
    },
    {
        equipment_tag: 'T2-L1-MER7-HVAC-AHU-011',
        type: 'AHU',
        location: 'Terminal',
        sub_location: 'MER 7',
        cobie_tag: 'T2-L1-1T13-01-HVAC-AHU-072-001'
    },
    {
        equipment_tag: 'T2-L1-MER7-HVAC-AHU-012',
        type: 'AHU',
        location: 'Terminal',
        sub_location: 'MER 7',
        cobie_tag: 'T2-L1-1T13-01-HVAC-AHU-073-001'
    },
    {
        equipment_tag: 'T2-L0-MER7-HVAC-DOAS-001',
        type: 'DOAS',
        location: 'Terminal',
        sub_location: 'MER 7',
        cobie_tag: 'T2-L1-1T13-01-HVAC-DOAS-014-001'
    },
    {
        equipment_tag: 'T2-L0-MER7-HVAC-DOAS-002',
        type: 'DOAS',
        location: 'Terminal',
        sub_location: 'MER 7',
        cobie_tag: 'T2-L1-1T13-01-HVAC-DOAS-015-001'
    },
    {
        equipment_tag: 'T2-L1-MER8-HVAC-AHU-001',
        type: 'AHU',
        location: 'Terminal',
        sub_location: 'MER 8',
        cobie_tag: 'T2-L1-1T33-04-HVAC-AHU-076-001'
    },
    {
        equipment_tag: 'T2-L1-MER8-HVAC-AHU-002',
        type: 'AHU',
        location: 'Terminal',
        sub_location: 'MER 8',
        cobie_tag: 'T2-L1-1T33-04-HVAC-AHU-077-001'
    },
    {
        equipment_tag: 'T2-L1-MER8-HVAC-AHU-003',
        type: 'AHU',
        location: 'Terminal',
        sub_location: 'MER 8',
        cobie_tag: 'T2-L1-1T33-04-HVAC-AHU-078-001'
    },
    {
        equipment_tag: 'T2-L1-MER8-HVAC-AHU-004',
        type: 'AHU',
        location: 'Terminal',
        sub_location: 'MER 8',
        cobie_tag: 'T2-L1-1T33-04-HVAC-AHU-079-001'
    },
    {
        equipment_tag: 'T2-L1-MER8-HVAC-AHU-005',
        type: 'AHU',
        location: 'Terminal',
        sub_location: 'MER 8',
        cobie_tag: 'T2-L1-1T33-04-HVAC-AHU-080-001'
    },
    {
        equipment_tag: 'T2-L1-MER9-HVAC-AHU-001',
        type: 'AHU',
        location: 'Terminal',
        sub_location: 'MER 9',
        cobie_tag: 'T2-L1-1T53-05-HVAC-AHU-082-001'
    },
    {
        equipment_tag: 'T2-L1-MER9-HVAC-AHU-002',
        type: 'AHU',
        location: 'Terminal',
        sub_location: 'MER 9',
        cobie_tag: 'T2-L1-1T53-05-HVAC-AHU-083-001'
    },
    {
        equipment_tag: 'T2-L1-MER9-HVAC-AHU-003',
        type: 'AHU',
        location: 'Terminal',
        sub_location: 'MER 9',
        cobie_tag: 'T2-L1-1T53-05-HVAC-AHU-081-001'
    },
    {
        equipment_tag: 'T2-L1-MER9-HVAC-AHU-004',
        type: 'AHU',
        location: 'Terminal',
        sub_location: 'MER 9',
        cobie_tag: 'T2-L1-1T53-05-HVAC-AHU-084-001'
    },
    {
        equipment_tag: 'T2-L1-MER10-HVAC-AHU-001',
        type: 'AHU',
        location: 'Terminal',
        sub_location: 'MER 10',
        cobie_tag: 'T2-L1-1T45-03-HVAC-AHU-090-001'
    },
    {
        equipment_tag: 'T2-L1-MER10-HVAC-AHU-002',
        type: 'AHU',
        location: 'Terminal',
        sub_location: 'MER 10',
        cobie_tag: 'T2-L1-1T45-01-HVAC-AHU-085-001'
    },
    {
        equipment_tag: 'T2-L1-MER10-HVAC-AHU-003',
        type: 'AHU',
        location: 'Terminal',
        sub_location: 'MER 10',
        cobie_tag: 'T2-L1-1T45-01-HVAC-AHU-086-001'
    },
    {
        equipment_tag: 'T2-L1-MER10-HVAC-AHU-004',
        type: 'AHU',
        location: 'Terminal',
        sub_location: 'MER 10',
        cobie_tag: 'T2-L1-1T45-01-HVAC-AHU-087-001'
    },
    {
        equipment_tag: 'T2-L1-MER10-HVAC-AHU-005',
        type: 'AHU',
        location: 'Terminal',
        sub_location: 'MER 10',
        cobie_tag: 'T2-L1-1T45-01-HVAC-AHU-088-001'
    },
    {
        equipment_tag: 'T2-L1-MER10-HVAC-AHU-006',
        type: 'AHU',
        location: 'Terminal',
        sub_location: 'MER 10',
        cobie_tag: 'T2-L1-1T45-01-HVAC-AHU-089-001'
    },
    {
        equipment_tag: 'T2-L0-MER11-HVAC-AHU-001',
        type: 'AHU',
        location: 'Terminal',
        sub_location: 'MER 11',
        cobie_tag: 'T2-L0-0T75-05-HVAC-AHU-092-001'
    },
    {
        equipment_tag: 'T2-L0-MER11-HVAC-AHU-002',
        type: 'AHU',
        location: 'Terminal',
        sub_location: 'MER 11',
        cobie_tag: 'T2-L0-0T75-05-HVAC-AHU-094-001'
    },
    {
        equipment_tag: 'T2-L0-MER11-HVAC-AHU-003',
        type: 'AHU',
        location: 'Terminal',
        sub_location: 'MER 11',
        cobie_tag: 'T2-L0-0T75-05-HVAC-AHU-093-001'
    },
    {
        equipment_tag: 'T2-L0-MER11-HVAC-DOAS-001',
        type: 'DOAS',
        location: 'Terminal',
        sub_location: 'MER 11',
        cobie_tag: 'T2-L0-0T75-05-HVAC-DOAS-016-001'
    },
    {
        equipment_tag: 'CUP-L1-PAC-01',
        type: 'Precision AC',
        location: 'CUP',
        sub_location: 'Data Center',
        cobie_tag: 'CUP-L1-1C-27-HVAC-CRAC-001-001'
    },
    {
        equipment_tag: 'CUP-L1-PAC-02',
        type: 'Precision AC',
        location: 'CUP',
        sub_location: 'Data Center',
        cobie_tag: 'CUP-L1-1C-27-HVAC-CRAC-001-002'
    },
    {
        equipment_tag: 'CUP-L1-PAC-03',
        type: 'Precision AC',
        location: 'CUP',
        sub_location: 'Data Center',
        cobie_tag: 'CUP-L1-1C-27-HVAC-CRAC-001-003'
    },
    {
        equipment_tag: 'CUP-L0-0C-05-HVAC-EAF-008',
        type: 'Exhaust Fan',
        location: 'CUP',
        sub_location: 'Chiller LV Switchgear',
        cobie_tag: 'CUP-L0-0C-05-HVAC-EAF-009-001'
    },
    {
        equipment_tag: 'CUP-L0-0C-09-HVAC-EAF-009',
        type: 'Exhaust Fan',
        location: 'CUP',
        sub_location: 'MV Switchgear',
        cobie_tag: 'CUP-L0-0C-09-HVAC-EAF-010-001'
    },
    {
        equipment_tag: 'CUP-L0-0C-09-HVAC-EAF-010',
        type: 'Exhaust Fan',
        location: 'CUP',
        sub_location: 'MV Switchgear',
        cobie_tag: 'CUP-L0-0C-09-HVAC-EAF-012-001'
    },
    {
        equipment_tag: 'CUP-L0-0C-38-HVAC-EAF-011',
        type: 'Exhaust Fan',
        location: 'CUP',
        sub_location: 'ACR Substation room / DG Panel room',
        cobie_tag: 'CUP-L0-0C-38-HVAC-EAF-008-001'
    },
    {
        equipment_tag: 'CUP-LB-BC-04-HVAC-EAF-001',
        type: 'Exhaust Fan',
        location: 'CUP',
        sub_location: 'Pump room',
        cobie_tag: 'CUP-LB-BC-04-HVAC-EAF-005-001'
    },
    {
        equipment_tag: 'CUP-L0-0C-08-HVAC-EAF-007',
        type: 'Exhaust Fan',
        location: 'CUP',
        sub_location: 'MCC room',
        cobie_tag: 'CUP-L0-0C-08-HVAC-EAF-007-001'
    },
    {
        equipment_tag: 'CUP-L0-0C-01-HVAC-EAF-002',
        type: 'Exhaust Fan',
        location: 'CUP',
        sub_location: 'Chiller room',
        cobie_tag: 'CUP-L0-0C-01-HVAC-EAF-011-001'
    },
    {
        equipment_tag: 'CUP-L0-0C-01-HVAC-EAF-003',
        type: 'Exhaust Fan',
        location: 'CUP',
        sub_location: 'Chiller room',
        cobie_tag: 'CUP-L0-0C-01-HVAC-EAF-011-002'
    },
    {
        equipment_tag: 'CUP-L0-0C-01-HVAC-EAF-004',
        type: 'Exhaust Fan',
        location: 'CUP',
        sub_location: 'Chiller room',
        cobie_tag: 'CUP-L0-0C-01-HVAC-EAF-011-003'
    },
    {
        equipment_tag: 'CUP-L0-0C-01-HVAC-EAF-005',
        type: 'Exhaust Fan',
        location: 'CUP',
        sub_location: 'Chiller room',
        cobie_tag: 'CUP-L0-0C-01-HVAC-EAF-011-004'
    },
    {
        equipment_tag: 'CUP-LB-BC-02-HVAC-EAF-033',
        type: 'Exhaust Fan',
        location: 'CUP',
        sub_location: 'Utility Tunnel corridor',
        cobie_tag: 'CUP-LB-BC-02-HVAC-EAF-006-001'
    },
    {
        equipment_tag: 'CUP-LB-HVAC-EAF-034',
        type: 'Exhaust Fan',
        location: 'CUP',
        sub_location: 'Utility Tunnel corridor',
        cobie_tag: ''
    },
    {
        equipment_tag: 'T2-L1-MER12-HVAC-AHU-001',
        type: 'AHU',
        location: 'Terminal',
        sub_location: 'MER 12',
        cobie_tag: 'T2-L1-1T75-20-HVAC-AHU-101-001'
    },
    {
        equipment_tag: 'T2-L1-MER12-HVAC-AHU-002',
        type: 'AHU',
        location: 'Terminal',
        sub_location: 'MER 12',
        cobie_tag: 'T2-L1-1T75-20-HVAC-AHU-096-001'
    },
    {
        equipment_tag: 'T2-L1-MER12-HVAC-AHU-004',
        type: 'AHU',
        location: 'Terminal',
        sub_location: 'MER 12',
        cobie_tag: 'T2-L1-1T75-20-HVAC-AHU-097-001'
    },
    {
        equipment_tag: 'T2-L1-MER12-HVAC-AHU-005',
        type: 'AHU',
        location: 'Terminal',
        sub_location: 'MER 12',
        cobie_tag: 'T2-L1-1T75-20-HVAC-AHU-098-001'
    },
    {
        equipment_tag: 'T2-L1-MER12-HVAC-AHU-006',
        type: 'AHU',
        location: 'Terminal',
        sub_location: 'MER 12',
        cobie_tag: 'T2-L1-1T75-20-HVAC-AHU-099-001'
    },
    {
        equipment_tag: 'T2-L1-MER12-HVAC-AHU-007',
        type: 'AHU',
        location: 'Terminal',
        sub_location: 'MER 12',
        cobie_tag: 'T2-L1-1T75-20-HVAC-AHU-100-001'
    },
    {
        equipment_tag: 'T2-L0-MER12-HVAC-DOAS-001',
        type: 'DOAS',
        location: 'Terminal',
        sub_location: 'MER 12',
        cobie_tag: 'T2-L1-1T75-20-HVAC-DOAS-018-001'
    },
    {
        equipment_tag: 'T2-L0-MER12-HVAC-DOAS-002',
        type: 'DOAS',
        location: 'Terminal',
        sub_location: 'MER 12',
        cobie_tag: 'T2-L1-1T75-20-HVAC-DOAS-017-001'
    },
    {
        equipment_tag: 'T2-L1-MER13-HVAC-AHU-001',
        type: 'AHU',
        location: 'Terminal',
        sub_location: 'MER 13',
        cobie_tag: 'T2-L1-1T75-16-HVAC-AHU-104-001'
    },
    {
        equipment_tag: 'T2-L1-MER13-HVAC-AHU-002',
        type: 'AHU',
        location: 'Terminal',
        sub_location: 'MER 13',
        cobie_tag: 'T2-L1-1T75-16-HVAC-AHU-105-001'
    },
    {
        equipment_tag: 'T2-L1-MER13-HVAC-AHU-003',
        type: 'AHU',
        location: 'Terminal',
        sub_location: 'MER 13',
        cobie_tag: 'T2-L1-1T75-16-HVAC-AHU-103-001'
    },
    {
        equipment_tag: 'T2-L1-MER13-HVAC-AHU-004',
        type: 'AHU',
        location: 'Terminal',
        sub_location: 'MER 13',
        cobie_tag: 'T2-L1-1T75-16-HVAC-AHU-106-001'
    },
    {
        equipment_tag: 'CUP-L0-0C-10-HVAC-EAF-006',
        type: 'Exhaust Fan',
        location: 'CUP',
        sub_location: 'Chiller starter panel',
        cobie_tag: 'CUP-L0-0C-10-HVAC-EAF-001-001'
    },
    {
        equipment_tag: 'CUP-L2-HVAC-EAF-027',
        type: 'Exhaust Fan',
        location: 'CUP',
        sub_location: "Store / Male Toilet / Female Toilet / Men's Restroom / HT / Female Toilet / Janitor",
        cobie_tag: 'CUP-L2-2C-11-HVAC-EAF-004-001'
    },
    {
        equipment_tag: 'CUP-L1-1C-12-HVAC-EAF-029',
        type: 'Exhaust Fan',
        location: 'CUP',
        sub_location: 'Gas Suppression room',
        cobie_tag: 'CUP-L1-1C-12-HVAC-EAF-002-001'
    },
    {
        equipment_tag: 'CUP-L1-1C-24-HVAC-EAF-031',
        type: 'Exhaust Fan',
        location: 'CUP',
        sub_location: 'Storage / File storage / Lockers / Changing room',
        cobie_tag: 'CUP-L1-1C-24-HVAC-EAF-003-001'
    },
    {
        equipment_tag: 'CUP-L1-1C-09-HVAC-EAF-028',
        type: 'Exhaust Fan',
        location: 'CUP',
        sub_location: 'Pantry',
        cobie_tag: 'CUP-L1-1C-09-HVAC-EAF-013-001'
    },
    {
        equipment_tag: 'CUP-L0-0C-35-HVAC-EAF-032',
        type: 'Exhaust Fan-WM',
        location: 'CUP',
        sub_location: 'UPS Panel room',
        cobie_tag: 'CUP-L0-0C-35-HVAC-EAF-014-001'
    },
    {
        equipment_tag: 'CUP-L0-0C-30-HVAC-EAF-012',
        type: 'Exhaust Fan-WM',
        location: 'CUP',
        sub_location: 'Service provider ME store',
        cobie_tag: ''
    },
    {
        equipment_tag: 'CUP-L0-0C-29-HVAC-EAF-013',
        type: 'Exhaust Fan-WM',
        location: 'CUP',
        sub_location: 'BIAL ME store',
        cobie_tag: 'CUP-L0-0C-29-HVAC-EAF-027-001'
    },
    {
        equipment_tag: 'CUP-L0-0C-28-HVAC-EAF-014',
        type: 'Exhaust Fan-WM',
        location: 'CUP',
        sub_location: 'Service provider FP store',
        cobie_tag: 'CUP-L0-0C-28-HVAC-EAF-018-001'
    },
    {
        equipment_tag: 'CUP-L0-0C-27-HVAC-EAF-015',
        type: 'Exhaust Fan-WM',
        location: 'CUP',
        sub_location: 'BIAL FP sotre',
        cobie_tag: 'CUP-L0-0C-27-HVAC-EAF-019-001'
    },
    {
        equipment_tag: 'CUP-L0-0C-26-HVAC-EAF-016',
        type: 'Exhaust Fan-WM',
        location: 'CUP',
        sub_location: 'Store-1',
        cobie_tag: 'CUP-L0-0C-26-HVAC-EAF-016-001'
    },
    {
        equipment_tag: 'CUP-L0-0C-26-HVAC-EAF- 017',
        type: 'Exhaust Fan-WM',
        location: 'CUP',
        sub_location: 'Store-1',
        cobie_tag: 'CUP-L0-0C-26-HVAC-EAF-016-002'
    },
    {
        equipment_tag: 'CUP-L0-0C-20-HVAC-EAF-018',
        type: 'Exhaust Fan-WM',
        location: 'CUP',
        sub_location: 'Service provider PL store',
        cobie_tag: 'CUP-L0-0C-20-HVAC-EAF-020-001'
    },
    {
        equipment_tag: 'CUP-L0-0C-21-HVAC-EAF-019',
        type: 'Exhaust Fan-WM',
        location: 'CUP',
        sub_location: 'BIAL PL store',
        cobie_tag: 'CUP-L0-0C-21-HVAC-EAF-021-001'
    },
    {
        equipment_tag: 'CUP-L0-0C-22-HVAC-EAF-020',
        type: 'Exhaust Fan-WM',
        location: 'CUP',
        sub_location: 'Power system department store',
        cobie_tag: 'CUP-L0-0C-22-HVAC-EAF-022-001'
    },
    {
        equipment_tag: 'T2-LB-BT34-01 - HVAC-CSU-B01',
        type: 'CSU',
        location: 'Terminal',
        sub_location: 'Basement',
        cobie_tag: 'T2-LB-BT34-01-HVAC-CSU-001-006'
    },
    {
        equipment_tag: 'T2-LB-BT34-01 - HVAC-CSU-B02',
        type: 'CSU',
        location: 'Terminal',
        sub_location: 'Basement',
        cobie_tag: 'T2-LB-BT34-01-HVAC-CSU-001-005'
    },
    {
        equipment_tag: 'T2-LB-BT34-01 - HVAC-CSU-B03',
        type: 'CSU',
        location: 'Terminal',
        sub_location: 'Basement',
        cobie_tag: 'T2-LB-BT34-01-HVAC-CSU-001-003'
    },
    {
        equipment_tag: 'T2-LB-BT34-01 - HVAC-CSU-B04',
        type: 'CSU',
        location: 'Terminal',
        sub_location: 'Basement',
        cobie_tag: 'T2-LB-BT34-01-HVAC-CSU-001-009'
    },
    {
        equipment_tag: 'T2-LB-BT34-01 - HVAC-CSU-B05',
        type: 'CSU',
        location: 'Terminal',
        sub_location: 'Basement',
        cobie_tag: 'T2-LB-BT34-01-HVAC-CSU-001-008'
    },
    {
        equipment_tag: 'T2-LB-BT34-01 - HVAC-CSU-B06',
        type: 'CSU',
        location: 'Terminal',
        sub_location: 'Basement',
        cobie_tag: 'T2-LB-BT34-01-HVAC-CSU-001-007'
    },
    {
        equipment_tag: 'T2-LB-BT34-01 - HVAC-CSU-B07',
        type: 'CSU',
        location: 'Terminal',
        sub_location: 'Basement',
        cobie_tag: 'T2-LB-BT34-01-HVAC-CSU-001-004'
    },
    {
        equipment_tag: 'T2-LB-BT34-01 - HVAC-CSU-B08',
        type: 'CSU',
        location: 'Terminal',
        sub_location: 'Basement',
        cobie_tag: 'T2-LB-BT34-01-HVAC-CSU-001-002'
    },
    {
        equipment_tag: 'T2-LB-BT34-01 - HVAC-CSU-B09',
        type: 'CSU',
        location: 'Terminal',
        sub_location: 'Basement',
        cobie_tag: 'T2-LB-BT34-01-HVAC-CSU-001-001'
    },
    {
        equipment_tag: 'T2-LB-BT43-05 - HVAC-CSU-B10',
        type: 'CSU',
        location: 'Terminal',
        sub_location: 'Basement',
        cobie_tag: 'T2-LB-BT43-05-HVAC-CSU-002-001'
    },
    {
        equipment_tag: 'CUP-L0-0C-23-HVAC-EAF-021',
        type: 'Exhaust Fan-WM',
        location: 'CUP',
        sub_location: 'Landside store - 1',
        cobie_tag: 'CUP-L0-0C-23-HVAC-EAF-023-001'
    },
    {
        equipment_tag: 'CUP-L0-0C-24-HVAC-EAF-022',
        type: 'Exhaust Fan-WM',
        location: 'CUP',
        sub_location: 'Landside store - 2',
        cobie_tag: 'CUP-L0-0C-24-HVAC-EAF-024-001'
    },
    {
        equipment_tag: 'CUP-L0-0C-25-HVAC-EAF-023',
        type: 'Exhaust Fan-WM',
        location: 'CUP',
        sub_location: 'Store - 2',
        cobie_tag: 'CUP-L0-0C-25-HVAC-EAF-017-001'
    },
    {
        equipment_tag: 'CUP-L0-0C-25-HVAC-EAF-024',
        type: 'Exhaust Fan-WM',
        location: 'CUP',
        sub_location: 'Store - 2',
        cobie_tag: 'CUP-L0-0C-25-HVAC-EAF-017-002'
    },
    {
        equipment_tag: 'CUP-L0-0C-34-HVAC-EAF-025',
        type: 'Exhaust Fan-WM',
        location: 'CUP',
        sub_location: 'Battery room near UPS room',
        cobie_tag: 'CUP-L0-0C-34-HVAC-EAF-026-001'
    },
    {
        equipment_tag: 'CUP-L0-0C-36-HVAC-EAF-026',
        type: 'Exhaust Fan-WM',
        location: 'CUP',
        sub_location: 'UPS Battery room',
        cobie_tag: 'CUP-L0-0C-36-HVAC-EAF-015-001'
    },
    {
        equipment_tag: 'CUP-L1-1C-28-HVAC-EAF-030',
        type: 'Exhaust Fan-WM',
        location: 'CUP',
        sub_location: 'Battery room',
        cobie_tag: 'CUP-L1-1C-28-HVAC-EAF-025-001'
    },
    {
        equipment_tag: 'CUP-L0-0C-12-HVAC-FAF-012',
        type: 'Fresh Air Fan',
        location: 'CUP',
        sub_location: 'Utility Tunnel corridor',
        cobie_tag: 'CUP-L0-0C-12-HVAC-FAF-002-001'
    },
    {
        equipment_tag: 'CUP-L0-0C-12-HVAC-FAF-013',
        type: 'Fresh Air Fan',
        location: 'CUP',
        sub_location: 'Utility Tunnel corridor',
        cobie_tag: 'CUP-L0-0C-12-HVAC-FAF-003-001'
    },
    {
        equipment_tag: 'CUP-LB-HVAC-FAF-014',
        type: 'Fresh Air Fan',
        location: 'CUP',
        sub_location: 'Utility Tunnel corridor',
        cobie_tag: ''
    },
    {
        equipment_tag: 'CUP-LB-HVAC-FAF-015',
        type: 'Fresh Air Fan',
        location: 'CUP',
        sub_location: 'T2 Utility Tunnel Corridor',
        cobie_tag: ''
    },
    {
        equipment_tag: 'CUP-LB-HVAC-FAF-016',
        type: 'Fresh Air Fan',
        location: 'CUP',
        sub_location: 'T2 Utility Tunnel Corridor',
        cobie_tag: ''
    },
    {
        equipment_tag: 'CUP-LB-BC-04-HVAC-FAF-001',
        type: 'Fresh Air Fan',
        location: 'CUP',
        sub_location: 'Pump room / Unassigned room',
        cobie_tag: 'CUP-LB-BC-04-HVAC-FAF-001-001'
    },
    {
        equipment_tag: 'CUP-L0-0C-05-HVAC-FAF-007',
        type: 'Fresh Air Fan',
        location: 'CUP',
        sub_location: 'Chiller LV Switchgear',
        cobie_tag: 'CUP-L0-0C-05-HVAC-FAF-008-001'
    },
    {
        equipment_tag: 'CUP-L0-0C-09-HVAC-FAF-008',
        type: 'Fresh Air Fan',
        location: 'CUP',
        sub_location: 'Chiller MV Switch gear',
        cobie_tag: 'CUP-L0-0C-09-HVAC-FAF-006-001'
    },
    {
        equipment_tag: 'T2-LB-BT41-02 - HVAC-CSU-B11',
        type: 'CSU',
        location: 'Terminal',
        sub_location: 'Basement',
        cobie_tag: 'T2-LB-BT41-02-HVAC-CSU-003-001'
    },
    {
        equipment_tag: 'T2-L0-0T04-06 - HVAC-CSU-001',
        type: 'CSU',
        location: 'Terminal',
        sub_location: 'L0-PP-04',
        cobie_tag: 'T2-L0-0T04-06-HVAC-CSU-004-001'
    },
    {
        equipment_tag: 'T2-L0-0T05-08 - HVAC-CSU-002',
        type: 'CSU',
        location: 'Terminal',
        sub_location: 'L0-PP-05',
        cobie_tag: 'T2-L0-0T05-08-HVAC-CSU-004-001'
    },
    {
        equipment_tag: 'T2-L0-0T13-27 - HVAC-CSU-003',
        type: 'CSU',
        location: 'Terminal',
        sub_location: 'L0-PP-13',
        cobie_tag: 'T2-L0-0T13-27-HVAC-CSU-005-001'
    },
    {
        equipment_tag: 'T2-L0-0T15-19 - HVAC-CSU-004',
        type: 'CSU',
        location: 'Terminal',
        sub_location: 'L0-PP-15',
        cobie_tag: 'T2-L0-0T15-19-HVAC-CSU-006-001'
    },
    {
        equipment_tag: 'T2-L0-0T21-11 - HVAC-CSU-005',
        type: 'CSU',
        location: 'Terminal',
        sub_location: 'L0-PP-21',
        cobie_tag: 'T2-L0-0T21-11-HVAC-CSU-007-001'
    },
    {
        equipment_tag: 'T2-L0-0T21-11 - HVAC-CSU-006',
        type: 'CSU',
        location: 'Terminal',
        sub_location: 'L0-PP-21',
        cobie_tag: 'T2-L0-0T21-11-HVAC-CSU-008-001'
    },
    {
        equipment_tag: 'T2-L0-0T33-12 - HVAC-CSU-007',
        type: 'CSU',
        location: 'Terminal',
        sub_location: 'L0-PP-33',
        cobie_tag: 'T2-L0-0T33-12-HVAC-CSU-009-001'
    },
    {
        equipment_tag: 'T2-L0-0T35-11A - HVAC-CSU-008',
        type: 'CSU',
        location: 'Terminal',
        sub_location: 'L0-PP-35',
        cobie_tag: 'T2-L0-0T35-11A-HVAC-CSU-010-001'
    },
    {
        equipment_tag: 'T2-L0-0T41-02A - HVAC-CSU-009',
        type: 'CSU',
        location: 'Terminal',
        sub_location: 'L0-PP-41',
        cobie_tag: ''
    },
    {
        equipment_tag: 'CUP-L0-0C-09-HVAC-FAF-009',
        type: 'Fresh Air Fan',
        location: 'CUP',
        sub_location: 'Chiller MV Switch gear',
        cobie_tag: 'CUP-L0-0C-09-HVAC-FAF-007-001'
    },
    {
        equipment_tag: 'CUP-L0-0C-39-HVAC-FAF-010',
        type: 'Fresh Air Fan',
        location: 'CUP',
        sub_location: 'ACR Substation room / DG Panel room',
        cobie_tag: 'CUP-L0-0C-39-HVAC-FAF-005-001'
    },
    {
        equipment_tag: 'CUP-L0-0C-01-HVAC-FAF-002',
        type: 'Fresh Air Fan',
        location: 'CUP',
        sub_location: 'Chiller Room',
        cobie_tag: 'CUP-L0-0C-01-HVAC-FAF-004-002'
    },
    {
        equipment_tag: 'CUP-L0-0C-01-HVAC-FAF-003',
        type: 'Fresh Air Fan',
        location: 'CUP',
        sub_location: 'Chiller Room',
        cobie_tag: 'CUP-L0-0C-01-HVAC-FAF-004-003'
    },
    {
        equipment_tag: 'CUP-L0-0C-01-HVAC-FAF-004',
        type: 'Fresh Air Fan',
        location: 'CUP',
        sub_location: 'Chiller Room',
        cobie_tag: 'CUP-L0-0C-01-HVAC-FAF-004-004'
    },
    {
        equipment_tag: 'CUP-L0-0C-01-HVAC-FAF-005',
        type: 'Fresh Air Fan',
        location: 'CUP',
        sub_location: 'Chiller Room',
        cobie_tag: 'CUP-L0-0C-01-HVAC-FAF-004-001'
    },
    {
        equipment_tag: 'CUP-L0-0C-35-HVAC-FAF-011',
        type: 'Fresh Air Fan',
        location: 'CUP',
        sub_location: 'UPS Panel room',
        cobie_tag: 'CUP-L0-0C-35-HVAC-FAF-009-001'
    },
    {
        equipment_tag: 'CUP-L0-0C-10-HVAC-FAF-006',
        type: 'Fresh Air Fan',
        location: 'CUP',
        sub_location: 'MCC room & Chiller starter panel',
        cobie_tag: 'CUP-L0-0C-10-HVAC-FAF-010-001'
    },
    {
        equipment_tag: 'T2-L0-0T45-03A - HVAC-CSU-010',
        type: 'CSU',
        location: 'Terminal',
        sub_location: 'L0-PP-45',
        cobie_tag: 'T2-L0-0T45-03A-HVAC-CSU-012-001'
    },
    {
        equipment_tag: 'T2-L0-0T51-11 - HVAC -DCSU-001',
        type: 'CSU',
        location: 'Terminal',
        sub_location: 'L0-PP-51',
        cobie_tag: 'T2-L0-0T51-11-HVAC-DXUI-006-001'
    },
    {
        equipment_tag: 'T2-L0-0T52-18 - HVAC -DCSU-002',
        type: 'CSU',
        location: 'Terminal',
        sub_location: 'L0-PP-52',
        cobie_tag: 'T2-L0-0T52-18-HVAC-DXUI-007-001'
    },
    {
        equipment_tag: 'T2-L0-0T53-37 - HVAC -DCSU-003',
        type: 'CSU',
        location: 'Terminal',
        sub_location: 'L0-PP-53',
        cobie_tag: 'T2-L0-0T53-37-HVAC-DXUI-006-001'
    },
    {
        equipment_tag: 'T2-L0-0T53-37 - HVAC -DCSU-004',
        type: 'CSU',
        location: 'Terminal',
        sub_location: 'L0-PP-53',
        cobie_tag: ''
    },
    {
        equipment_tag: 'T2-L0-0T53-59A - HVAC -CSU-011',
        type: 'CSU',
        location: 'Terminal',
        sub_location: 'L0-PP-53',
        cobie_tag: 'T2-L0-0T53-59A-HVAC-CSU-013-001'
    },
    {
        equipment_tag: 'T2-L0-0T53-18 - HVAC -CSU-012',
        type: 'CSU',
        location: 'Terminal',
        sub_location: 'L0-PP-53',
        cobie_tag: 'T2-L0-0T53-18-HVAC-CSU-014-001'
    },
    {
        equipment_tag: 'T2-L0-0T53-25A - HVAC -CSU-013',
        type: 'CSU',
        location: 'Terminal',
        sub_location: 'L0-PP-53',
        cobie_tag: 'T2-L0-0T53-25A-HVAC-CSU-015-001'
    },
    {
        equipment_tag: 'T2-L0-0T53-31 - HVAC -CSU-014',
        type: 'CSU',
        location: 'Terminal',
        sub_location: 'L0-PP-53',
        cobie_tag: 'T2-L0-0T53-31-HVAC-CSU-016-001'
    },
    {
        equipment_tag: 'T2-L0-0T54-02A - HVAC -CSU-015',
        type: 'CSU',
        location: 'Terminal',
        sub_location: 'L0-PP-54',
        cobie_tag: 'T2-L0-0T54-02A-HVAC-CSU-017-001'
    },
    {
        equipment_tag: 'T2-L0-0T61-01A - HVAC -CSU-016',
        type: 'CSU',
        location: 'Terminal',
        sub_location: 'L0-PP-61',
        cobie_tag: 'T2-L0-0T61-03-HVAC-CSU-018-001'
    },
    {
        equipment_tag: 'T2-L0-0T53-54 - HVAC -CSU-017',
        type: 'CSU',
        location: 'Terminal',
        sub_location: 'L0-PP-53',
        cobie_tag: 'T2-L0-0T53-54-HVAC-CSU-019-001'
    },
    {
        equipment_tag: 'T2-L0-0T72-01 - HVAC -CSU-018',
        type: 'CSU',
        location: 'Terminal',
        sub_location: 'L0-PP-72',
        cobie_tag: 'T2-L0-0TPA-06-HVAC-CSU-020-001'
    },
    {
        equipment_tag: 'T2-L0-0T75-09A - HVAC -CSU-019',
        type: 'CSU',
        location: 'Terminal',
        sub_location: 'L0-PP-75',
        cobie_tag: 'T2-L0-0T75-09A-HVAC-CSU-021-001'
    },
    {
        equipment_tag: 'T2-L1-1T13-12 - HVAC-CSU-101',
        type: 'CSU',
        location: 'Terminal',
        sub_location: 'L1-PP-13',
        cobie_tag: 'T2-L1-1T13-12-HVAC-CSU-022-001'
    },
    {
        equipment_tag: 'T2-L1-1T25-12 - HVAC-CSU-102',
        type: 'CSU',
        location: 'Terminal',
        sub_location: 'L1-PP-25',
        cobie_tag: 'T2-L1-1T25-12-HVAC-CSU-023-001'
    },
    {
        equipment_tag: 'T2-L1-1T31-06 - HVAC-CSU-103',
        type: 'CSU',
        location: 'Terminal',
        sub_location: 'L1-PP-31',
        cobie_tag: 'T2-L1-1T31-06-HVAC-CSU-024-001'
    },
    {
        equipment_tag: 'T2-L1-1T33-07 - HVAC-CSU-104',
        type: 'CSU',
        location: 'Terminal',
        sub_location: 'L1-PP-33',
        cobie_tag: 'T2-L1-1T33-07-HVAC-CSU-025-001'
    },
    {
        equipment_tag: 'CUP-L0-0C-29-HVAC-DXUI-001-001',
        type: 'DX Ductable AC',
        location: 'CUP',
        sub_location: 'BIAL ME STORAGE 0C-29',
        cobie_tag: ''
    },
    {
        equipment_tag: 'CUP-L1-1C-10-HVAC-FCU-002-001',
        type: 'DX Ductable AC',
        location: 'CUP',
        sub_location: 'FILE STORAGE 1C-10',
        cobie_tag: 'CUP-L1-1C-10-HVAC-DXUI-001-001'
    },
    {
        equipment_tag: 'CUP-L0-0C-07-HVAC-AHU-001-001',
        type: 'Dual Coil\n(CHW+DX)-CSU',
        location: 'CUP',
        sub_location: 'CUP Level-0',
        cobie_tag: 'CUP-L0-0C-07-HVAC-DXUI-002-001'
    },
    {
        equipment_tag: 'CUP-L0-0C-07-HVAC-AHU-001-002',
        type: 'Dual Coil\n(CHW+DX)-CSU',
        location: 'CUP',
        sub_location: 'CUP Level-0',
        cobie_tag: 'CUP-L0-0C-07-HVAC-DXUI-003-001'
    },
    {
        equipment_tag: 'CUP-L0-0C-06-HVAC-AHU-001-001',
        type: 'CHW-CSU',
        location: 'CUP',
        sub_location: 'CUP Level-0',
        cobie_tag: 'CUP-L0-0C-06-HVAC-CSU-001-001'
    },
    {
        equipment_tag: 'CUP-L0-0C-06-HVAC-DXUI-001-001',
        type: 'DX-CSU',
        location: 'CUP',
        sub_location: 'CUP Level-0',
        cobie_tag: 'CUP-L0-0C-06-HVAC-DXUI-001-001'
    },
    {
        equipment_tag: 'CUP-L0-0C-04-HVAC-AHU-002-001',
        type: 'Dual Coil\n(CHW+DX)-CSU',
        location: 'CUP',
        sub_location: 'CUP Level-0',
        cobie_tag: ''
    },
    {
        equipment_tag: 'CUP-L0-0C-36-HVAC-AHU-001-001',
        type: 'Dual Coil\n(CHW+DX)-CSU',
        location: 'CUP',
        sub_location: 'CUP Level-0',
        cobie_tag: 'CUP-L0-0C-36-HVAC-DXUI-004-001'
    },
    {
        equipment_tag: 'CUP-L1-1C-16-HVAC-AHU-003-001',
        type: 'CHW-CSU',
        location: 'CUP',
        sub_location: 'CUP Level-1',
        cobie_tag: ''
    },
    {
        equipment_tag: 'CUP-L1-1C-03-HVAC-AHU-005-001',
        type: 'CHW-CSU',
        location: 'CUP',
        sub_location: 'CUP Level-1',
        cobie_tag: 'CUP-L1-1C-03-HVAC-CSU-004-001'
    },
    {
        equipment_tag: 'CUP-L1-1C-04-HVAC-AHU-006-001',
        type: 'CHW-CSU',
        location: 'CUP',
        sub_location: 'CUP Level-1',
        cobie_tag: 'CUP-L1-1C-04-HVAC-CSU-005-001'
    },
    {
        equipment_tag: 'CUP-L1-1C-14-HVAC-AHU-006-001',
        type: 'CHW-CSU',
        location: 'CUP',
        sub_location: 'CUP Level-1',
        cobie_tag: 'CUP-L1-1C-14-HVAC-CSU-006-001'
    },
    {
        equipment_tag: 'CUP-L1-1C-06-HVAC-AHU-006-001',
        type: 'CHW-CSU',
        location: 'CUP',
        sub_location: 'CUP Level-1',
        cobie_tag: 'CUP-L1-1C-06-HVAC-CSU-007-001'
    },
    {
        equipment_tag: 'CUP-L1-1C-06-HVAC-AHU-006-002',
        type: 'CHW-CSU',
        location: 'CUP',
        sub_location: 'CUP Level-1',
        cobie_tag: 'CUP-L1-1C-06-HVAC-CSU-008-001'
    },
    {
        equipment_tag: 'CUP-L1-1C-23-HVAC-AHU-006-001',
        type: 'CHW-CSU',
        location: 'CUP',
        sub_location: 'CUP Level-1',
        cobie_tag: 'CUP-L1-1C-23-HVAC-CSU-009-001'
    },
    {
        equipment_tag: 'T2-L1-1T35-02 - HVAC-CSU-105',
        type: 'CSU',
        location: 'Terminal',
        sub_location: 'L1-PP-35',
        cobie_tag: 'T2-L1-1T35-02-HVAC-CSU-026-001'
    },
    {
        equipment_tag: 'T2-L1-1T41-05 - HVAC-CSU-106',
        type: 'CSU',
        location: 'Terminal',
        sub_location: 'L1-PP-41',
        cobie_tag: 'T2-L1-1T41-05-HVAC-CSU-027-001'
    },
    {
        equipment_tag: 'T2-L1-1T45-06 - HVAC-CSU-107',
        type: 'CSU',
        location: 'Terminal',
        sub_location: 'L1-PP-45',
        cobie_tag: 'T2-L1-1T45-06-HVAC-CSU-028-001'
    },
    {
        equipment_tag: 'T2-L1-1T52-03 - HVAC-CSU-108',
        type: 'CSU',
        location: 'Terminal',
        sub_location: 'L1-PP-52',
        cobie_tag: 'T2-L1-1T53-05-HVAC-CSU-029-001'
    },
    {
        equipment_tag: 'T2-L1-1T53-20 - HVAC-CSU-109',
        type: 'CSU',
        location: 'Terminal',
        sub_location: 'L1-PP-53',
        cobie_tag: 'T2-L1-1T53-20-HVAC-CSU-030-001'
    },
    {
        equipment_tag: 'T2-L1-1T55-11 - HVAC-CSU-110',
        type: 'CSU',
        location: 'Terminal',
        sub_location: 'L1-PP-55',
        cobie_tag: 'T2-L1-1T55-11-HVAC-CSU-031-001'
    },
    {
        equipment_tag: 'T2-L1-1T55-11 - HVAC -DCSU-101',
        type: 'CSU',
        location: 'Terminal',
        sub_location: 'L1-PP-55',
        cobie_tag: ''
    },
    {
        equipment_tag: 'T2-L1-1T55-08 - HVAC -DCSU-102',
        type: 'CSU',
        location: 'Terminal',
        sub_location: 'L1-PP-55',
        cobie_tag: 'T2-L1-1T55-08-HVAC-DXUI-004-001'
    },
    {
        equipment_tag: 'T2-L1-1T54-06 - HVAC -DCSU-103',
        type: 'CSU',
        location: 'Terminal',
        sub_location: 'L1-PP-54',
        cobie_tag: 'T2-L1-1T54-06-HVAC-DXUI-005-001'
    },
    {
        equipment_tag: 'T2-L1-1T54-06 - HVAC -DCSU-104',
        type: 'CSU',
        location: 'Terminal',
        sub_location: 'L1-PP-54',
        cobie_tag: 'T2-L1-1T54-06-HVAC-DXUI-003-001'
    },
    {
        equipment_tag: 'CUP-L1-1C-29-HVAC-AHU-007-001',
        type: 'Dual Coil\n(CHW+DX)-CSU',
        location: 'CUP',
        sub_location: 'CUP Level-1',
        cobie_tag: ''
    },
    {
        equipment_tag: 'CUP-L2-HVAC-AHU-008-001',
        type: 'CHW-TFA',
        location: 'CUP',
        sub_location: 'CUP Level-2',
        cobie_tag: 'CUP-L2-2C-11-HVAC-CSU-002-001'
    },
    {
        equipment_tag: 'T2-L0-0T44-XX-HVAC-CSU-001-001',
        type: 'CHW-CSU',
        location: 'CUP',
        sub_location: 'CUP-Level-0',
        cobie_tag: 'T2-L0-0T44-01-HVAC-CSU-052-002'
    },
    {
        equipment_tag: 'T2-L0-0T44-XX-HVAC-CSU-001-002',
        type: 'CHW-CSU',
        location: 'CUP',
        sub_location: 'CUP-Level-0',
        cobie_tag: 'T2-L0-0T44-01-HVAC-CSU-052-001'
    },
    {
        equipment_tag: 'CUP-L0-0C-34-HVAC-FCU-001-001',
        type: 'Fan Coil Unit',
        location: 'CUP',
        sub_location: 'BATTERY ROOM (0C-34)',
        cobie_tag: 'CUP-L0-0C-34-HVAC-FCU-001-001'
    },
    {
        equipment_tag: 'CUP-L1-1C-30-HVAC-FCU-002-001',
        type: 'Fan Coil Unit',
        location: 'CUP',
        sub_location: 'MONITORING ROOM (1C-30)',
        cobie_tag: ''
    },
    {
        equipment_tag: 'CUP-L1-1C-22-HVAC-FCU-003-001',
        type: 'Fan Coil Unit',
        location: 'CUP',
        sub_location: 'MEETING ROOM (1C-22)',
        cobie_tag: 'CUP-L1-1C-22-HVAC-FCU-003-001'
    },
    {
        equipment_tag: 'CUP-L1-1C-28-HVAC-FCU-004-001',
        type: 'Fan Coil Unit',
        location: 'CUP',
        sub_location: 'BATTERY (1C-28)',
        cobie_tag: 'CUP-L1-1C-28-HVAC-FCU-004-001'
    },
    {
        equipment_tag: 'T2-L1-1T54-06 - HVAC -DCSU-105',
        type: 'CSU',
        location: 'Terminal',
        sub_location: 'L1-PP-54',
        cobie_tag: ''
    },
    {
        equipment_tag: 'T2-L1-1T61-07 - HVAC-CSU-111',
        type: 'CSU',
        location: 'Terminal',
        sub_location: 'L1-PP-61',
        cobie_tag: 'T2-L1-1T61-07-HVAC-CSU-032-001'
    },
    {
        equipment_tag: 'T2-L1-1T63-01 - HVAC-CSU-112',
        type: 'CSU',
        location: 'Terminal',
        sub_location: 'L1-PP-63',
        cobie_tag: 'T2-L0-0T63-01-HVAC-CSU-033-001'
    },
    {
        equipment_tag: 'T2-L1-1T63-01 - HVAC-CSU-113',
        type: 'CSU',
        location: 'Terminal',
        sub_location: 'L1-PP-63',
        cobie_tag: 'T2-L0-0T63-01-HVAC-CSU-033-002'
    },
    {
        equipment_tag: 'T2-L1-1T63-10B - HVAC-CSU-114',
        type: 'CSU',
        location: 'Terminal',
        sub_location: 'L1-PP-63',
        cobie_tag: 'T2-L1-1T63-10B-HVAC-CSU-034-001'
    },
    {
        equipment_tag: 'T2-L1-1T63-07 - HVAC-CSU-115',
        type: 'CSU',
        location: 'Terminal',
        sub_location: 'L1-PP-63',
        cobie_tag: 'T2-L1-1T63-07-HVAC-CSU-035-001'
    },
    {
        equipment_tag: 'T2-L1-1T71-11 - HVAC-CSU-116',
        type: 'CSU',
        location: 'Terminal',
        sub_location: 'L1-PP-71',
        cobie_tag: 'T2-L1-1T71-11-HVAC-CSU-036-001'
    },
    {
        equipment_tag: 'T2-L1-1T73-15 - HVAC-CSU-117',
        type: 'CSU',
        location: 'Terminal',
        sub_location: 'L1-PP-73',
        cobie_tag: 'T2-L1-1T73-15-HVAC-CSU-037-001'
    },
    {
        equipment_tag: 'T2-L1-1T75-11 - HVAC-CSU-118',
        type: 'CSU',
        location: 'Terminal',
        sub_location: 'L1-PP-75',
        cobie_tag: 'T2-L1-1T75-11-HVAC-CSU-038-001'
    },
    {
        equipment_tag: 'T2-L1-1T76-12 - HVAC-CSU-119',
        type: 'CSU',
        location: 'Terminal',
        sub_location: 'L1-PP-76',
        cobie_tag: 'T2-L1-1T76-12-HVAC-CSU-039-001'
    },
    {
        equipment_tag: 'T2-L1-1T78-03 - HVAC-CSU-120',
        type: 'CSU',
        location: 'Terminal',
        sub_location: 'L1-PP-78',
        cobie_tag: 'T2-L1-1T78-03-HVAC-CSU-040-001'
    },
    {
        equipment_tag: 'T2-L2-2T64-05 - HVAC-CSU-201',
        type: 'CSU',
        location: 'Terminal',
        sub_location: 'L2-PP-64',
        cobie_tag: 'T2-L2-2T64-05-HVAC-CSU-041-001'
    },
    {
        equipment_tag: 'T2-L3-3T33-27 - HVAC-CSU-301',
        type: 'CSU',
        location: 'Terminal',
        sub_location: 'L3-PP-33',
        cobie_tag: 'T2-L3-3T33-27-HVAC-CSU-042-001'
    },
    {
        equipment_tag: 'T2-L3-3T33-44 - HVAC-CSU-302',
        type: 'CSU',
        location: 'Terminal',
        sub_location: 'L3-PP-33',
        cobie_tag: 'T2-L3-3T33-44-HVAC-CSU-043-001'
    },
    {
        equipment_tag: 'T2-L3-3T34-04 - HVAC-CSU-303',
        type: 'CSU',
        location: 'Terminal',
        sub_location: 'L3-PP-34',
        cobie_tag: 'T2-L3-3T34-04-HVAC-CSU-044-001'
    },
    {
        equipment_tag: 'T2-L3-3T34-51 - HVAC-CSU-304',
        type: 'CSU',
        location: 'Terminal',
        sub_location: 'L3-PP-34',
        cobie_tag: 'T2-L3-3T34-51-HVAC-CSU-045-001'
    },
    {
        equipment_tag: 'T2-L3-3T35-04 - HVAC-CSU-305',
        type: 'CSU',
        location: 'Terminal',
        sub_location: 'L3-PP-35',
        cobie_tag: 'T2-L3-3T35-04-HVAC-CSU-046-001'
    },
    {
        equipment_tag: 'T2-L3-3T44-24 - HVAC-CSU-306',
        type: 'CSU',
        location: 'Terminal',
        sub_location: 'L3-PP-44',
        cobie_tag: 'T2-L3-3T44-24-HVAC-CSU-047-001'
    },
    {
        equipment_tag: 'T2-L3-3T53-26 - HVAC-CSU-307',
        type: 'CSU',
        location: 'Terminal',
        sub_location: 'L3-PP-53',
        cobie_tag: 'T2-L3-3T53-26-HVAC-CSU-048-001'
    },
    {
        equipment_tag: 'T2-L3-3T64-36 - HVAC-CSU-308',
        type: 'CSU',
        location: 'Terminal',
        sub_location: 'L3-PP-64',
        cobie_tag: 'T2-L3-3T64-36-HVAC-CSU-049-001'
    },
    {
        equipment_tag: 'T2-L4-4T53-06 - HVAC-CSU-401',
        type: 'CSU',
        location: 'Terminal',
        sub_location: 'L4-PP-53',
        cobie_tag: 'T2-L4-4T53-06-HVAC-CSU-050-001'
    },
    {
        equipment_tag: 'T2-L4-4T64-11 - HVAC-CSU-402',
        type: 'CSU',
        location: 'Terminal',
        sub_location: 'L4-PP-64',
        cobie_tag: 'T2-L4-4T64-11-HVAC-CSU-051-001'
    },
    {
        equipment_tag: 'T2-L3-3T33-42 - HVAC-DCSU-301',
        type: 'CSU',
        location: 'Terminal',
        sub_location: 'L3-PP-33',
        cobie_tag: 'T2-L3-3T33-42-HVAC-DXUI-008-001'
    },
    {
        equipment_tag: 'T2-L0-0T1334-HVAC-TFA-001',
        type: 'CSU',
        location: 'Terminal',
        sub_location: 'L0-PP-0T1334',
        cobie_tag: ''
    },
    {
        equipment_tag: 'T2-L0-0T1608-HVAC-TFA-002',
        type: 'CSU',
        location: 'Terminal',
        sub_location: 'L0-PP-0T1608',
        cobie_tag: ''
    },
    {
        equipment_tag: 'T2-LB-BT25-01 - HVAC-FCU-B03',
        type: 'FCU',
        location: 'Terminal',
        sub_location: 'PHASE 2 EGRESS CORRIDOR (BT25-01)',
        cobie_tag: 'T2-LB-BT25-01-HVAC-FCU-001-001'
    },
    {
        equipment_tag: 'T2-LB-BT42-01 - HVAC-FCU-B12',
        type: 'FCU',
        location: 'Terminal',
        sub_location: ' GH-1 (BT42-01)',
        cobie_tag: 'T2-LB-BT42-01-HVAC-FCU-027-001'
    },
    {
        equipment_tag: 'T2-LB-BT23-02 - HVAC-FCU-B01',
        type: 'FCU',
        location: 'Terminal',
        sub_location: ' EGRESS CORRIDOR (BT43-13)',
        cobie_tag: 'T2-LB-BT23-02-HVAC-FCU-012-001'
    },
    {
        equipment_tag: 'T2-LB-BT23-02 - HVAC-FCU- B02',
        type: 'FCU',
        location: 'Terminal',
        sub_location: ' EGRESS CORRIDOR (BT43-13)',
        cobie_tag: 'T2-LB-BT23-02-HVAC-FCU-012-002'
    },
    {
        equipment_tag: 'T2-LB-BT43-10 - HVAC-FCU-B04',
        type: 'FCU',
        location: 'Terminal',
        sub_location: ' EGRESS CORRIDOR (BT43-10)',
        cobie_tag: 'T2-LB-BT43-10-HVAC-FCU-013-001'
    },
    {
        equipment_tag: 'T2-LB-BT43-11 - HVAC-FCU-B05',
        type: 'FCU',
        location: 'Terminal',
        sub_location: ' BMS PANEL RM (BT43-11)',
        cobie_tag: 'T2-LB-BT43-11-HVAC-FCU-002-001'
    },
    {
        equipment_tag: 'T2-LB-BT43-13 - HVAC-FCU-B06',
        type: 'FCU',
        location: 'Terminal',
        sub_location: ' EGRESS CORRIDOR (BT43-13)',
        cobie_tag: 'T2-LB-BT43-13-HVAC-FCU-004-001'
    },
    {
        equipment_tag: 'T2-LB-BT51-11 - HVAC-FCU-B07',
        type: 'FCU',
        location: 'Terminal',
        sub_location: 'EGRESS CORRIDOR- 1 (BT51-11-1)',
        cobie_tag: 'T2-LB-BT51-11-HVAC-FCU-013-001'
    },
    {
        equipment_tag: 'T2-LB-BT51-11 - HVAC-FCU- B08',
        type: 'FCU',
        location: 'Terminal',
        sub_location: 'EGRESS CORRIDOR- 1 (BT51-11-1)',
        cobie_tag: 'T2-LB-BT51-11-HVAC-FCU-013-002'
    },
    {
        equipment_tag: 'T2-LB-BT53-02 - HVAC-FCU-B09',
        type: 'FCU',
        location: 'Terminal',
        sub_location: 'TRASH CHUTE RM (BT53-02)',
        cobie_tag: 'T2-LB-BT53-02-HVAC-FCU-003-001'
    },
    {
        equipment_tag: 'T2-LB-BT54-01 - HVAC-FCU-B10',
        type: 'FCU',
        location: 'Terminal',
        sub_location: ' TRASH CHUTE RM (BT54-01)',
        cobie_tag: 'T2-LB-BT54-01-HVAC-FCU-005-001'
    },
    {
        equipment_tag: 'T2-LB-BT54-02 - HVAC-FCU-B11',
        type: 'FCU',
        location: 'Terminal',
        sub_location: 'CHUTE RM (BT54-02)',
        cobie_tag: 'T2-LB-BT54-02-HVAC-FCU-003-001'
    },
    {
        equipment_tag: 'T2-L0-0T13-04 - HVAC -FCU-001',
        type: 'FCU',
        location: 'Terminal',
        sub_location: ' CIP LOUNGE ARRIVAL (0T13-04)',
        cobie_tag: 'T2-L0-0T13-04-HVAC-FCU-006-001'
    },
    {
        equipment_tag: 'T2-L0-0T35-11B - HVAC -FCU-002',
        type: 'FCU',
        location: 'Terminal',
        sub_location: ' SS3 BATTERY RM (0T35-11B)',
        cobie_tag: 'T2-L0-0T35-11B-HVAC-FCU-028-001'
    },
    {
        equipment_tag: 'T2-L0-0T41-02B - HVAC -FCU-003',
        type: 'FCU',
        location: 'Terminal',
        sub_location: ' SS1 BATTERY RM (0T41-02B)',
        cobie_tag: 'T2-L0-0T41-02B-HVAC-FCU-033-001'
    },
    {
        equipment_tag: 'T2-L0-0T43-07 - HVAC -FCU-004',
        type: 'FCU',
        location: 'Terminal',
        sub_location: ' TRASH RM (0T43-07)',
        cobie_tag: 'T2-L0-0T43-07-HVAC-FCU-007-001'
    },
    {
        equipment_tag: 'T2-L0-0T44-XX-HVAC-FCU-001-001',
        type: 'FCU',
        location: 'Terminal',
        sub_location: 'SS3A UPS ROOM',
        cobie_tag: 'T2-L0-0T44-08-HVAC-FCU-037-001'
    },
    {
        equipment_tag: 'T2-L0-0T45-03B - HVAC -FCU-005',
        type: 'FCU',
        location: 'Terminal',
        sub_location: ' SS4 BATTERY RM (0T45-03B)',
        cobie_tag: 'T2-L0-0T45-03B-HVAC-FCU-020-001'
    },
    {
        equipment_tag: 'T2-L0-0T45-21 - HVAC-FCU-006',
        type: 'FCU',
        location: 'Terminal',
        sub_location: ' DINING RM (0T45-21)',
        cobie_tag: 'T2-L0-0T45-21-HVAC-FCU-029-001'
    },
    {
        equipment_tag: 'T2-L0-0T52-16 - HVAC-FCU-007',
        type: 'FCU',
        location: 'Terminal',
        sub_location: ' DINING RM (0T52-16)',
        cobie_tag: 'T2-L0-0T52-16-HVAC-FCU-021-001'
    },
    {
        equipment_tag: 'T2-L0-0T53-59B - HVAC-FCU-008',
        type: 'FCU',
        location: 'Terminal',
        sub_location: ' BOI MCR BATTERY (0T53-59B)',
        cobie_tag: 'T2-L0-0T53-25B-HVAC-FCU-035-001'
    },
    {
        equipment_tag: 'T2-L0-0T53-25B - HVAC-FCU-009',
        type: 'FCU',
        location: 'Terminal',
        sub_location: ' MCR BATTERY RM B (0T53-25B)',
        cobie_tag: 'T2-L0-0T53-25B-HVAC-FCU-035-001'
    },
    {
        equipment_tag: 'T2-L0-0T53-25B - HVAC-FCU-010',
        type: 'FCU',
        location: 'Terminal',
        sub_location: ' BATTERY RM (0T54-02B)',
        cobie_tag: ''
    },
    {
        equipment_tag: 'T2-L0-0T54-38 - HVAC-FCU-011',
        type: 'FCU',
        location: 'Terminal',
        sub_location: ' TRASH CHUTE RM (0T54-38)',
        cobie_tag: 'T2-L0-0T54-38-HVAC-FCU-009-001'
    },
    {
        equipment_tag: 'T2-L0-0T54-24 - HVAC-FCU-012',
        type: 'FCU',
        location: 'Terminal',
        sub_location: ' CAFETERIA (0T54-24)',
        cobie_tag: 'T2-L0-0T54-24-HVAC-FCU-036-001'
    },
    {
        equipment_tag: 'T2-L0-0T55-01 - HVAC-FCU-013',
        type: 'FCU',
        location: 'Terminal',
        sub_location: ' DINING RM (0T55-01)',
        cobie_tag: 'T2-L0-0T55-01-HVAC-FCU-030-001'
    },
    {
        equipment_tag: 'T2-L0-0T53-53 - HVAC-FCU-014',
        type: 'FCU',
        location: 'Terminal',
        sub_location: ' ELECTRICAL STORAGE (0T53-53)',
        cobie_tag: 'T2-L0-0T53-53-HVAC-FCU-022-001'
    },
    {
        equipment_tag: 'T2-L0-0T61-01B - HVAC-FCU-015',
        type: 'FCU',
        location: 'Terminal',
        sub_location: ' SS2 BATTERY RM (0T61-01B)',
        cobie_tag: 'T2-L0-0T61-01B-HVAC-FCU-023-001'
    },
    {
        equipment_tag: 'T2-L0-0T75-09B - HVAC-FCU-016',
        type: 'FCU',
        location: 'Terminal',
        sub_location: ' SS5 BATTERY RM (0T75-09B)',
        cobie_tag: 'T2-L0-0T75-09B-HVAC-FCU-031-001'
    },
    {
        equipment_tag: 'T2-L0-0T75-16 - HVAC-FCU-017',
        type: 'FCU',
        location: 'Terminal',
        sub_location: ' MACHINE RM (0T75-16)',
        cobie_tag: 'T2-L0-0T75-16-HVAC-FCU-032-001'
    },
    {
        equipment_tag: 'T2-L1-1T53-06 - HVAC-FCU-101',
        type: 'FCU',
        location: 'Terminal',
        sub_location: ' TRASH CHUTE RM (1T53-06)',
        cobie_tag: 'T2-L1-1T53-06-HVAC-FCU-010-001'
    },
    {
        equipment_tag: 'T2-L1-1T63-10A - HVAC-FCU-102',
        type: 'FCU',
        location: 'Terminal',
        sub_location: ' MCR BATTERY RM A (1T63-10A)',
        cobie_tag: 'T2-L1-1T63-10A-HVAC-FCU-034-001'
    },
    {
        equipment_tag: 'T2-L2-2T35-02 - HVAC-FCU-201',
        type: 'FCU',
        location: 'Terminal',
        sub_location: ' BHS MAINT.LANDING (2T35-02)',
        cobie_tag: 'T2-L2-2T35-02-HVAC-FCU-024-001'
    },
    {
        equipment_tag: 'T2-L2-2T43-02 - HVAC-FCU-202',
        type: 'FCU',
        location: 'Terminal',
        sub_location: ' EGRESS CORRIDOR-1(2T43-02-1)',
        cobie_tag: 'T2-L2-2T43-02-HVAC-FCU-026-001'
    },
    {
        equipment_tag: 'T2-L2-2T43-02 - HVAC-FCU- 203',
        type: 'FCU',
        location: 'Terminal',
        sub_location: ' EGRESS CORRIDOR-1(2T43-02-1)',
        cobie_tag: 'T2-L2-2T43-02-HVAC-FCU-026-002'
    },
    {
        equipment_tag: 'T2-L2-2T55-03 - HVAC-FCU-204',
        type: 'FCU',
        location: 'Terminal',
        sub_location: ' EGRESS CORRIDOR (2T55-03)',
        cobie_tag: 'T2-L2-2T55-03-HVAC-FCU-025-001'
    },
    {
        equipment_tag: 'T2-L2-2T64-01 - HVAC-FCU-205',
        type: 'FCU',
        location: 'Terminal',
        sub_location: ' EGRESS CORRIDOR (2T64-01)',
        cobie_tag: 'T2-L2-2T64-01-HVAC-FCU-015-001'
    },
    {
        equipment_tag: 'T2-L3-3T44-08 - HVAC-FCU-301',
        type: 'FCU',
        location: 'Terminal',
        sub_location: ' TRSH CHUTE RM (3T44-08)',
        cobie_tag: 'T2-L3-3T44-08-HVAC-FCU-010-001'
    },
    {
        equipment_tag: 'T2-L3-3T54-20 - HVAC-FCU-302',
        type: 'FCU',
        location: 'Terminal',
        sub_location: ' TRSH CHUTE RM (3T54-20)',
        cobie_tag: 'T2-L3-3T54-20-HVAC-FCU-016-001'
    },
    {
        equipment_tag: 'T2-L3-3T54-22 - HVAC-FCU-303',
        type: 'FCU',
        location: 'Terminal',
        sub_location: ' TRSH CHUTE RM (3T54-22)',
        cobie_tag: 'T2-L3-3T54-22-HVAC-FCU-017-001'
    },
    {
        equipment_tag: 'T2-L3-3T65-05 - HVAC-FCU-304',
        type: 'FCU',
        location: 'Terminal',
        sub_location: ' BMS PANEL RM (3T65-05)',
        cobie_tag: 'T2-L3-3T65-05-HVAC-FCU-035-001'
    },
    {
        equipment_tag: 'T2-L4-4T53-04 - HVAC-FCU-401',
        type: 'FCU',
        location: 'Terminal',
        sub_location: ' TRSH CHUTE RM (4T53-04)',
        cobie_tag: 'T2-L4-4T53-04-HVAC-FCU-018-001'
    },
    {
        equipment_tag: 'T2-L4-4T54-02 - HVAC-FCU-402',
        type: 'FCU',
        location: 'Terminal',
        sub_location: ' TRSH CHUTE RM (4T54-02)',
        cobie_tag: 'T2-L4-4T54-02-HVAC-FCU-019-001'
    },
    {
        equipment_tag: 'T2-L4-4T54-06 - HVAC-FCU-403',
        type: 'FCU',
        location: 'Terminal',
        sub_location: ' TRSH CHUTE RM (4T54-06)',
        cobie_tag: 'T2-L4-4T54-06-HVAC-FCU-011-001'
    },
    {
        equipment_tag: 'T2-L4-4T5408-HVAC-FCU-404',
        type: 'FCU',
        location: 'Terminal',
        sub_location: 'BMS PANEL ROOM (4T54-08)',
        cobie_tag: ''
    },
    {
        equipment_tag: 'T2-L1-1T21-05 - HVAC-FCU-001',
        type: 'FCU',
        location: 'Terminal',
        sub_location: 'FLB – A (1T21-05)',
        cobie_tag: 'FLB-L1-TYPE-A-HVAC-FCU-037-001'
    },
    {
        equipment_tag: 'T2-L1-1T21-05 - HVAC-FCU-002',
        type: 'FCU',
        location: 'Terminal',
        sub_location: 'FLB – A (1T21-05)',
        cobie_tag: 'FLB-L1-TYPE-A-HVAC-FCU-037-002'
    },
    {
        equipment_tag: 'T2-L1-1T21-05 - HVAC-FCU-003',
        type: 'FCU',
        location: 'Terminal',
        sub_location: 'FLB – A (1T21-05)',
        cobie_tag: 'FLB-L1-TYPE-A-HVAC-FCU-037-003'
    },
    {
        equipment_tag: 'T2-L1-1T21-05 - HVAC-FCU-004',
        type: 'FCU',
        location: 'Terminal',
        sub_location: 'FLB – A (1T21-05)',
        cobie_tag: 'FLB-L1-TYPE-A-HVAC-FCU-037-004'
    },
    {
        equipment_tag: 'T2-L1-1T21-05 - HVAC-FCU-005',
        type: 'FCU',
        location: 'Terminal',
        sub_location: 'FLB – A (1T21-05)',
        cobie_tag: 'FLB-L1-TYPE-A-HVAC-FCU-037-005'
    },
    {
        equipment_tag: 'T2-L1-1T21-05 - HVAC-FCU-006',
        type: 'FCU',
        location: 'Terminal',
        sub_location: 'FLB – A (1T21-05)',
        cobie_tag: 'FLB-L1-TYPE-A-HVAC-FCU-037-006'
    },
    {
        equipment_tag: 'T2-L1-1T30-01 - HVAC-FCU-001',
        type: 'FCU',
        location: 'Terminal',
        sub_location: 'FLB – B (1T30-01)',
        cobie_tag: 'FLB-L1-TYPE-B-HVAC-FCU-037-001'
    },
    {
        equipment_tag: 'T2-L1-1T30-01 - HVAC-FCU-002',
        type: 'FCU',
        location: 'Terminal',
        sub_location: 'FLB – B (1T30-01)',
        cobie_tag: 'FLB-L1-TYPE-B-HVAC-FCU-037-002'
    },
    {
        equipment_tag: 'T2-L1-1T30-01 - HVAC-FCU-003',
        type: 'FCU',
        location: 'Terminal',
        sub_location: 'FLB – B (1T30-01)',
        cobie_tag: 'FLB-L1-TYPE-B-HVAC-FCU-037-003'
    },
    {
        equipment_tag: 'T2-L1-1T30-01 - HVAC-FCU-004',
        type: 'FCU',
        location: 'Terminal',
        sub_location: 'FLB – B (1T30-01)',
        cobie_tag: 'FLB-L1-TYPE-B-HVAC-FCU-037-004'
    },
    {
        equipment_tag: 'T2-L1-1T30-01 - HVAC-FCU-005',
        type: 'FCU',
        location: 'Terminal',
        sub_location: 'FLB – B (1T30-01)',
        cobie_tag: 'FLB-L1-TYPE-B-HVAC-FCU-037-005'
    },
    {
        equipment_tag: 'T2-L1-1T30-01 - HVAC-FCU-006',
        type: 'FCU',
        location: 'Terminal',
        sub_location: 'FLB – B (1T30-01)',
        cobie_tag: 'FLB-L1-TYPE-B-HVAC-FCU-037-006'
    },
    {
        equipment_tag: 'T2-L1-1T50-01 - HVAC-FCU-001',
        type: 'FCU',
        location: 'Terminal',
        sub_location: 'FLB – C(1T50-01 )',
        cobie_tag: 'FLB-L1-TYPE-C-HVAC-FCU-037-001'
    },
    {
        equipment_tag: 'T2-L1-1T50-01 - HVAC-FCU-002',
        type: 'FCU',
        location: 'Terminal',
        sub_location: 'FLB – C(1T50-01 )',
        cobie_tag: 'FLB-L1-TYPE-C-HVAC-FCU-037-002'
    },
    {
        equipment_tag: 'T2-L1-1T50-01 - HVAC-FCU-003',
        type: 'FCU',
        location: 'Terminal',
        sub_location: 'FLB – C(1T50-01 )',
        cobie_tag: 'FLB-L1-TYPE-C-HVAC-FCU-037-003'
    },
    {
        equipment_tag: 'T2-L1-1T50-01 - HVAC-FCU-004',
        type: 'FCU',
        location: 'Terminal',
        sub_location: 'FLB – C(1T50-01 )',
        cobie_tag: 'FLB-L1-TYPE-C-HVAC-FCU-037-004'
    },
    {
        equipment_tag: 'T2-L1-1T50-01 - HVAC-FCU-005',
        type: 'FCU',
        location: 'Terminal',
        sub_location: 'FLB – C(1T50-01 )',
        cobie_tag: 'FLB-L1-TYPE-C-HVAC-FCU-037-005'
    },
    {
        equipment_tag: 'T2-L1-1T60-01 - HVAC-FCU-001',
        type: 'FCU',
        location: 'Terminal',
        sub_location: 'FLB – D (1T60-01)',
        cobie_tag: 'FLB-L1-TYPE-D-HVAC-FCU-038-001'
    },
    {
        equipment_tag: 'T2-L1-1T60-01 - HVAC-FCU-002',
        type: 'FCU',
        location: 'Terminal',
        sub_location: 'FLB – D (1T60-01)',
        cobie_tag: 'FLB-L1-TYPE-D-HVAC-FCU-038-002'
    },
    {
        equipment_tag: 'T2-L1-1T60-01 - HVAC-FCU-003',
        type: 'FCU',
        location: 'Terminal',
        sub_location: 'FLB – D (1T60-01)',
        cobie_tag: 'FLB-L1-TYPE-D-HVAC-FCU-038-003'
    },
    {
        equipment_tag: 'T2-L1-1T60-01 - HVAC-FCU-004',
        type: 'FCU',
        location: 'Terminal',
        sub_location: 'FLB – D (1T60-01)',
        cobie_tag: 'FLB-L1-TYPE-D-HVAC-FCU-038-004'
    },
    {
        equipment_tag: 'T2-L1-1T60-01 - HVAC-FCU-005',
        type: 'FCU',
        location: 'Terminal',
        sub_location: 'FLB – D (1T60-01)',
        cobie_tag: 'FLB-L1-TYPE-D-HVAC-FCU-038-005'
    },
    {
        equipment_tag: 'T2-L1-1T60-01 - HVAC-FCU-006',
        type: 'FCU',
        location: 'Terminal',
        sub_location: 'FLB – D (1T60-01)',
        cobie_tag: 'FLB-L1-TYPE-D-HVAC-FCU-038-006'
    },
    {
        equipment_tag: 'T2-L1-1T70-01 - HVAC-FCU-001',
        type: 'FCU',
        location: 'Terminal',
        sub_location: 'FLB – E (1T70-01)',
        cobie_tag: 'FLB-L1-TYPE-E-HVAC-FCU-039-001'
    },
    {
        equipment_tag: 'T2-L1-1T70-01 - HVAC-FCU-002',
        type: 'FCU',
        location: 'Terminal',
        sub_location: 'FLB – E (1T70-01)',
        cobie_tag: 'FLB-L1-TYPE-E-HVAC-FCU-039-002'
    },
    {
        equipment_tag: 'T2-L1-1T70-01 - HVAC-FCU-003',
        type: 'FCU',
        location: 'Terminal',
        sub_location: 'FLB – E (1T70-01)',
        cobie_tag: 'FLB-L1-TYPE-E-HVAC-FCU-039-003'
    },
    {
        equipment_tag: 'T2-L1-1T70-01 - HVAC-FCU-004',
        type: 'FCU',
        location: 'Terminal',
        sub_location: 'FLB – E (1T70-01)',
        cobie_tag: 'FLB-L1-TYPE-E-HVAC-FCU-039-004'
    },
    {
        equipment_tag: 'T2-L1-1T70-01 - HVAC-FCU-005',
        type: 'FCU',
        location: 'Terminal',
        sub_location: 'FLB – E (1T70-01)',
        cobie_tag: 'FLB-L1-TYPE-E-HVAC-FCU-039-005'
    },
    {
        equipment_tag: 'T2-L1-1T70-01 - HVAC-FCU-006',
        type: 'FCU',
        location: 'Terminal',
        sub_location: 'FLB – E (1T70-01)',
        cobie_tag: 'FLB-L1-TYPE-E-HVAC-FCU-039-006'
    },
    {
        equipment_tag: 'T2-L1-1T80-01 - HVAC-FCU-001',
        type: 'FCU',
        location: 'Terminal',
        sub_location: 'FLB – F (1T80-01)',
        cobie_tag: 'FLB-L1-TYPE-F-HVAC-FCU-040-001'
    },
    {
        equipment_tag: 'T2-L1-1T80-01 - HVAC-FCU-002',
        type: 'FCU',
        location: 'Terminal',
        sub_location: 'FLB – F (1T80-01)',
        cobie_tag: 'FLB-L1-TYPE-F-HVAC-FCU-040-002'
    },
    {
        equipment_tag: 'T2-L1-1T80-01 - HVAC-FCU-003',
        type: 'FCU',
        location: 'Terminal',
        sub_location: 'FLB – F (1T80-01)',
        cobie_tag: 'FLB-L1-TYPE-F-HVAC-FCU-040-003'
    },
    {
        equipment_tag: 'T2-L1-1T80-01 - HVAC-FCU-004',
        type: 'FCU',
        location: 'Terminal',
        sub_location: 'FLB – F (1T80-01)',
        cobie_tag: 'FLB-L1-TYPE-F-HVAC-FCU-040-004'
    },
    {
        equipment_tag: 'T2-L1-1T80-01 - HVAC-FCU-005',
        type: 'FCU',
        location: 'Terminal',
        sub_location: 'FLB – F (1T80-01)',
        cobie_tag: 'FLB-L1-TYPE-F-HVAC-FCU-040-005'
    },
    {
        equipment_tag: 'T2-L1-1T80-01 - HVAC-FCU-006',
        type: 'FCU',
        location: 'Terminal',
        sub_location: 'FLB – F (1T80-01)',
        cobie_tag: 'FLB-L1-TYPE-F-HVAC-FCU-040-006'
    },
    {
        equipment_tag: 'T2-L1-1T81-01 - HVAC-FCU-001',
        type: 'FCU',
        location: 'Terminal',
        sub_location: 'FLB – G (1T81-01)',
        cobie_tag: 'FLB-L1-TYPE-G-HVAC-FCU-041-001'
    },
    {
        equipment_tag: 'T2-L1-1T81-01 - HVAC-FCU-002',
        type: 'FCU',
        location: 'Terminal',
        sub_location: 'FLB – G (1T81-01)',
        cobie_tag: 'FLB-L1-TYPE-G-HVAC-FCU-041-002'
    },
    {
        equipment_tag: 'T2-L1-1T81-01 - HVAC-FCU-003',
        type: 'FCU',
        location: 'Terminal',
        sub_location: 'FLB – G (1T81-01)',
        cobie_tag: 'FLB-L1-TYPE-G-HVAC-FCU-041-003'
    },
    {
        equipment_tag: 'T2-L1-1T81-01 - HVAC-FCU-004',
        type: 'FCU',
        location: 'Terminal',
        sub_location: 'FLB – G (1T81-01)',
        cobie_tag: 'FLB-L1-TYPE-G-HVAC-FCU-041-004'
    },
    {
        equipment_tag: 'T2-L1-1T81-01 - HVAC-FCU-005',
        type: 'FCU',
        location: 'Terminal',
        sub_location: 'FLB – G (1T81-01)',
        cobie_tag: 'FLB-L1-TYPE-G-HVAC-FCU-041-005'
    },
    {
        equipment_tag: 'T2-L1-1T81-01 - HVAC-FCU-006',
        type: 'FCU',
        location: 'Terminal',
        sub_location: 'FLB – G (1T81-01)',
        cobie_tag: 'FLB-L1-TYPE-G-HVAC-FCU-041-006'
    },
    {
        equipment_tag: 'T2-L1-1T83-01 - HVAC-FCU-001',
        type: 'FCU',
        location: 'Terminal',
        sub_location: 'FLB – H (1T83-01)',
        cobie_tag: 'FLB-L1-TYPE-H-HVAC-FCU-041-001'
    },
    {
        equipment_tag: 'T2-L1-1T83-01 - HVAC-FCU-002',
        type: 'FCU',
        location: 'Terminal',
        sub_location: 'FLB – H (1T83-01)',
        cobie_tag: 'FLB-L1-TYPE-H-HVAC-FCU-041-002'
    },
    {
        equipment_tag: 'T2-L1-1T83-01 - HVAC-FCU-003',
        type: 'FCU',
        location: 'Terminal',
        sub_location: 'FLB – H (1T83-01)',
        cobie_tag: 'FLB-L1-TYPE-H-HVAC-FCU-041-003'
    },
    {
        equipment_tag: 'T2-L1-1T83-01 - HVAC-FCU-004',
        type: 'FCU',
        location: 'Terminal',
        sub_location: 'FLB – H (1T83-01)',
        cobie_tag: 'FLB-L1-TYPE-H-HVAC-FCU-041-004'
    },
    {
        equipment_tag: 'T2-L1-1T83-01 - HVAC-FCU-005',
        type: 'FCU',
        location: 'Terminal',
        sub_location: 'FLB – H (1T83-01)',
        cobie_tag: 'FLB-L1-TYPE-H-HVAC-FCU-041-005'
    },
    {
        equipment_tag: 'T2-L1-1T83-01 - HVAC-FCU-006',
        type: 'FCU',
        location: 'Terminal',
        sub_location: 'FLB – H (1T83-01)',
        cobie_tag: 'FLB-L1-TYPE-H-HVAC-FCU-041-006'
    },
    {
        equipment_tag: 'T2-L1-1T84-01 - HVAC-FCU-001',
        type: 'FCU',
        location: 'Terminal',
        sub_location: 'FLB – J (1T84-01)',
        cobie_tag: ''
    },
    {
        equipment_tag: 'T2-L1-1T84-01 - HVAC-FCU-002',
        type: 'FCU',
        location: 'Terminal',
        sub_location: 'FLB – J (1T84-01)',
        cobie_tag: ''
    },
    {
        equipment_tag: 'T2-L1-1T84-01 - HVAC-FCU-003',
        type: 'FCU',
        location: 'Terminal',
        sub_location: 'FLB – J (1T84-01)',
        cobie_tag: ''
    },
    {
        equipment_tag: 'T2-L1-1T84-01 - HVAC-FCU-004',
        type: 'FCU',
        location: 'Terminal',
        sub_location: 'FLB – J (1T84-01)',
        cobie_tag: ''
    },
    {
        equipment_tag: 'T2-L1-1T84-01 - HVAC-FCU-005',
        type: 'FCU',
        location: 'Terminal',
        sub_location: 'FLB – J (1T84-01)',
        cobie_tag: ''
    },
    {
        equipment_tag: 'T2-L1-1T84-01 - HVAC-FCU-006',
        type: 'FCU',
        location: 'Terminal',
        sub_location: 'FLB – J (1T84-01)',
        cobie_tag: ''
    },
    {
        equipment_tag: 'T2-L1-1T86-01 - HVAC-FCU-001',
        type: 'FCU',
        location: 'Terminal',
        sub_location: 'FLB – K (1T86-01)',
        cobie_tag: 'FLB-L1-TYPE-K-HVAC-FCU-041-001'
    },
    {
        equipment_tag: 'T2-L1-1T86-01 - HVAC-FCU-002',
        type: 'FCU',
        location: 'Terminal',
        sub_location: 'FLB – K (1T86-01)',
        cobie_tag: 'FLB-L1-TYPE-K-HVAC-FCU-041-002'
    },
    {
        equipment_tag: 'T2-L1-1T86-01 - HVAC-FCU-003',
        type: 'FCU',
        location: 'Terminal',
        sub_location: 'FLB – K (1T86-01)',
        cobie_tag: 'FLB-L1-TYPE-K-HVAC-FCU-041-003'
    },
    {
        equipment_tag: 'T2-L1-1T86-01 - HVAC-FCU-004',
        type: 'FCU',
        location: 'Terminal',
        sub_location: 'FLB – K (1T86-01)',
        cobie_tag: 'FLB-L1-TYPE-K-HVAC-FCU-041-004'
    },
    {
        equipment_tag: 'T2-L1-1T86-01 - HVAC-FCU-005',
        type: 'FCU',
        location: 'Terminal',
        sub_location: 'FLB – K (1T86-01)',
        cobie_tag: 'FLB-L1-TYPE-K-HVAC-FCU-041-005'
    },
    {
        equipment_tag: 'T2-L1-1T86-01 - HVAC-FCU-006',
        type: 'FCU',
        location: 'Terminal',
        sub_location: 'FLB – K (1T86-01)',
        cobie_tag: 'FLB-L1-TYPE-K-HVAC-FCU-041-006'
    },
    {
        equipment_tag: 'T2-L1-1T87-01 - HVAC-FCU-001',
        type: 'FCU',
        location: 'Terminal',
        sub_location: 'FLB – L (1T87-01)',
        cobie_tag: 'FLB-L1-TYPE-L-HVAC-FCU-041-001'
    },
    {
        equipment_tag: 'T2-L1-1T87-01 - HVAC-FCU-002',
        type: 'FCU',
        location: 'Terminal',
        sub_location: 'FLB – L (1T87-01)',
        cobie_tag: 'FLB-L1-TYPE-L-HVAC-FCU-041-002'
    },
    {
        equipment_tag: 'T2-L1-1T87-01 - HVAC-FCU-003',
        type: 'FCU',
        location: 'Terminal',
        sub_location: 'FLB – L (1T87-01)',
        cobie_tag: 'FLB-L1-TYPE-L-HVAC-FCU-041-003'
    },
    {
        equipment_tag: 'T2-L1-1T87-01 - HVAC-FCU-004',
        type: 'FCU',
        location: 'Terminal',
        sub_location: 'FLB – L (1T87-01)',
        cobie_tag: 'FLB-L1-TYPE-L-HVAC-FCU-041-004'
    },
    {
        equipment_tag: 'T2-L1-1T87-01 - HVAC-FCU-005',
        type: 'FCU',
        location: 'Terminal',
        sub_location: 'FLB – L (1T87-01)',
        cobie_tag: 'FLB-L1-TYPE-L-HVAC-FCU-041-005'
    },
    {
        equipment_tag: 'T2-L1-1T87-01 - HVAC-FCU-006',
        type: 'FCU',
        location: 'Terminal',
        sub_location: 'FLB – L (1T87-01)',
        cobie_tag: 'FLB-L1-TYPE-L-HVAC-FCU-041-006'
    },
    {
        equipment_tag: 'T2-L3-1T50-01 - HVAC-FCU-001',
        type: 'FCU',
        location: 'Terminal',
        sub_location: 'FLB – C (1T50-01)',
        cobie_tag: 'FLB-L3-TYPE-C-HVAC-FCU-037-001'
    },
    {
        equipment_tag: 'T2-L3-1T50-01 - HVAC-FCU-002',
        type: 'FCU',
        location: 'Terminal',
        sub_location: 'FLB – C (1T50-01)',
        cobie_tag: 'FLB-L3-TYPE-C-HVAC-FCU-037-002'
    },
    {
        equipment_tag: 'T2-L3-1T50-01 - HVAC-FCU-003',
        type: 'FCU',
        location: 'Terminal',
        sub_location: 'FLB – C (1T50-01)',
        cobie_tag: 'FLB-L3-TYPE-C-HVAC-FCU-037-003'
    },
    {
        equipment_tag: 'T2-L3-1T50-01 - HVAC-FCU-004',
        type: 'FCU',
        location: 'Terminal',
        sub_location: 'FLB – C (1T50-01)',
        cobie_tag: 'FLB-L3-TYPE-C-HVAC-FCU-037-004'
    },
    {
        equipment_tag: 'T2-L3-1T50-01 - HVAC-FCU-005',
        type: 'FCU',
        location: 'Terminal',
        sub_location: 'FLB – C (1T50-01)',
        cobie_tag: 'FLB-L3-TYPE-C-HVAC-FCU-037-005'
    },
    {
        equipment_tag: 'T2-L3-1T50-01 - HVAC-FCU-006',
        type: 'FCU',
        location: 'Terminal',
        sub_location: 'FLB – C (1T50-01)',
        cobie_tag: 'FLB-L3-TYPE-C-HVAC-FCU-037-006'
    },
    {
        equipment_tag: 'T2-L3-1T50-01 - HVAC-FCU-007',
        type: 'FCU',
        location: 'Terminal',
        sub_location: 'FLB – C (1T50-01)',
        cobie_tag: 'FLB-L3-TYPE-C-HVAC-FCU-037-007'
    },
    {
        equipment_tag: 'T2-L3-1T60-01 - HVAC-FCU-001',
        type: 'FCU',
        location: 'Terminal',
        sub_location: 'FLB – D (1T60-01)',
        cobie_tag: 'FLB-L3-TYPE-D-HVAC-FCU-042-001'
    },
    {
        equipment_tag: 'T2-L3-1T60-01 - HVAC-FCU-002',
        type: 'FCU',
        location: 'Terminal',
        sub_location: 'FLB – D (1T60-01)',
        cobie_tag: 'FLB-L3-TYPE-D-HVAC-FCU-042-002'
    },
    {
        equipment_tag: 'T2-L3-1T60-01 - HVAC-FCU-003',
        type: 'FCU',
        location: 'Terminal',
        sub_location: 'FLB – D (1T60-01)',
        cobie_tag: 'FLB-L3-TYPE-D-HVAC-FCU-042-003'
    },
    {
        equipment_tag: 'T2-L3-1T60-01 - HVAC-FCU-004',
        type: 'FCU',
        location: 'Terminal',
        sub_location: 'FLB – D (1T60-01)',
        cobie_tag: 'FLB-L3-TYPE-D-HVAC-FCU-042-004'
    },
    {
        equipment_tag: 'T2-L3-1T60-01 - HVAC-FCU-005',
        type: 'FCU',
        location: 'Terminal',
        sub_location: 'FLB – D (1T60-01)',
        cobie_tag: 'FLB-L3-TYPE-D-HVAC-FCU-042-005'
    },
    {
        equipment_tag: 'T2-L3-1T60-01 - HVAC-FCU-006',
        type: 'FCU',
        location: 'Terminal',
        sub_location: 'FLB – D (1T60-01)',
        cobie_tag: 'FLB-L3-TYPE-D-HVAC-FCU-042-006'
    },
    {
        equipment_tag: 'T2-LB-BT3401-HVAC-FAF-001',
        type: 'Fresh Air Fan',
        location: 'Terminal',
        sub_location: 'BAGGAGE UNLOAD / X-RAY',
        cobie_tag: 'T2-LB-BT34-01-HVAC-FAF-001-001'
    },
    {
        equipment_tag: 'T2-LB-BT3401-HVAC-FAF-002',
        type: 'Fresh Air Fan',
        location: 'Terminal',
        sub_location: 'BAGGAGE UNLOAD / X-RAY',
        cobie_tag: 'T2-LB-BT34-01-HVAC-FAF-002-001'
    },
    {
        equipment_tag: 'T2-LB-BT3401-HVAC-FAF-003',
        type: 'Fresh Air Fan',
        location: 'Terminal',
        sub_location: 'BAGGAGE UNLOAD / X-RAY',
        cobie_tag: 'T2-LB-BT34-01-HVAC-FAF-003-001'
    },
    {
        equipment_tag: 'T2-LB-BT3401-HVAC-FAF-004',
        type: 'Fresh Air Fan',
        location: 'Terminal',
        sub_location: 'BAGGAGE UNLOAD / X-RAY',
        cobie_tag: 'T2-LB-BT34-01-HVAC-FAF-004-001'
    },
    {
        equipment_tag: 'T2-LB-BT3401-HVAC-FAF-005',
        type: 'Fresh Air Fan',
        location: 'Terminal',
        sub_location: 'BAGGAGE UNLOAD / X-RAY',
        cobie_tag: 'T2-LB-BT34-01-HVAC-FAF-005-001'
    },
    {
        equipment_tag: 'T2-LB-BT3401-HVAC-FAF-006',
        type: 'Fresh Air Fan',
        location: 'Terminal',
        sub_location: 'BAGGAGE UNLOAD / X-RAY',
        cobie_tag: 'T2-LB-BT34-01-HVAC-FAF-006-001'
    },
    {
        equipment_tag: 'T2-LB-BT4303-HVAC-FAF-007',
        type: 'Fresh Air Fan',
        location: 'Terminal',
        sub_location: 'CONCESSION SUPPORT AREA',
        cobie_tag: 'T2-LB-BT43-03-HVAC-FAF-007-001'
    },
    {
        equipment_tag: 'T2-LB-BT4303-HVAC-FAF-008',
        type: 'Fresh Air Fan',
        location: 'Terminal',
        sub_location: 'CONCESSION SUPPORT AREA',
        cobie_tag: 'T2-LB-BT43-03-HVAC-FAF-008-001'
    },
    {
        equipment_tag: 'T2-LB-BT4303-HVAC-FAF-009',
        type: 'Fresh Air Fan',
        location: 'Terminal',
        sub_location: 'CONCESSION SUPPORT AREA',
        cobie_tag: ''
    },
    {
        equipment_tag: 'T2-LB-BT4303-HVAC-FAF-010',
        type: 'Fresh Air Fan',
        location: 'Terminal',
        sub_location: 'CONCESSION SUPPORT AREA',
        cobie_tag: ''
    },
    {
        equipment_tag: 'T2-LB-BT4303-HVAC-FAF-011',
        type: 'Fresh Air Fan',
        location: 'Terminal',
        sub_location: 'CONCESSION SUPPORT AREA',
        cobie_tag: ''
    },
    {
        equipment_tag: 'T2-LB-BT4303-HVAC-FAF-012',
        type: 'Fresh Air Fan',
        location: 'Terminal',
        sub_location: 'SERVICE CORRIDOR',
        cobie_tag: ''
    },
    {
        equipment_tag: 'T2-L0-0T6401-HVAC-FAF-001',
        type: 'Fresh Air Fan',
        location: 'Terminal',
        sub_location: 'L0-RAMP',
        cobie_tag: 'T2-L0-0T64-01-HVAC-FAF-022-001'
    },
    {
        equipment_tag: 'T2-L0-0T6401-HVAC-FAF-002',
        type: 'Fresh Air Fan',
        location: 'Terminal',
        sub_location: 'BAGGAGE MAKEUP',
        cobie_tag: 'T2-L0-0T64-01-HVAC-FAF-023-001'
    },
    {
        equipment_tag: 'T2-L0-0T6401-HVAC-FAF-003',
        type: 'Fresh Air Fan',
        location: 'Terminal',
        sub_location: 'BAGGAGE MAKEUP',
        cobie_tag: 'T2-L0-0T64-01-HVAC-FAF-024-001'
    },
    {
        equipment_tag: 'T2-L0-0T6401-HVAC-FAF-004',
        type: 'Fresh Air Fan',
        location: 'Terminal',
        sub_location: 'BAGGAGE MAKEUP',
        cobie_tag: 'T2-L0-0T64-01-HVAC-FAF-025-001'
    },
    {
        equipment_tag: 'T2-L0-0T6401-HVAC-FAF-005',
        type: 'Fresh Air Fan',
        location: 'Terminal',
        sub_location: 'BAGGAGE MAKEUP',
        cobie_tag: ''
    },
    {
        equipment_tag: 'T2-L0-0T6401-HVAC-FAF-006',
        type: 'Fresh Air Fan',
        location: 'Terminal',
        sub_location: 'BAGGAGE MAKEUP',
        cobie_tag: ''
    },
    {
        equipment_tag: 'T2-L0-0T6401-HVAC-FAF-007',
        type: 'Fresh Air Fan',
        location: 'Terminal',
        sub_location: 'BAGGAGE MAKEUP',
        cobie_tag: ''
    },
    {
        equipment_tag: 'T2-L0-0T2111-HVAC-FAF-001',
        type: 'Fresh Air Fan',
        location: 'Terminal',
        sub_location: 'L0 - STAFF CANTEEN KITCHEN',
        cobie_tag: ''
    },
    {
        equipment_tag: 'T2-L0-0T61-13-HVAC-FAF-002-001',
        type: 'Fresh Air Fan',
        location: 'Terminal',
        sub_location: 'Pump Room Supply',
        cobie_tag: ''
    },
    {
        equipment_tag: 'T2-L0-0T72-18-HVAC-FAF-001-001',
        type: 'Fresh Air Fan',
        location: 'Terminal',
        sub_location: 'L0 & Substation GPV',
        cobie_tag: 'T2-L0-0T72-18-HVAC-FAF-013-001'
    },
    {
        equipment_tag: 'T2-L0-0T72-18-HVAC-FAF-001-002',
        type: 'Fresh Air Fan',
        location: 'Terminal',
        sub_location: 'L0 & Substation GPV',
        cobie_tag: 'T2-L0-0T72-18-HVAC-FAF-013-002'
    },
    {
        equipment_tag: 'T2-L0-0T72-18-HVAC-FAF-001-003',
        type: 'Fresh Air Fan',
        location: 'Terminal',
        sub_location: 'L0 & Substation GPV',
        cobie_tag: 'T2-L0-0T72-18-HVAC-FAF-013-003'
    },
    {
        equipment_tag: 'T2-L0-75-02-HVAC-FAF-008-001',
        type: 'Fresh Air Fan',
        location: 'Terminal',
        sub_location: 'L0 Concessions support area',
        cobie_tag: 'T2-L0-0T75-02-HVAC-FAF-014-001'
    },
    {
        equipment_tag: 'T2-L0-75-02-HVAC-FAF-008-002',
        type: 'Fresh Air Fan',
        location: 'Terminal',
        sub_location: 'L0 Concessions support area',
        cobie_tag: 'T2-L0-0T75-02-HVAC-FAF-014-002'
    },
    {
        equipment_tag: 'T2-L0-76-12-HVAC-FAF-004-001',
        type: 'Fresh Air Fan',
        location: 'Terminal',
        sub_location: 'L0 Food Village',
        cobie_tag: 'T2-L0-0T76-12-HVAC-FAF-015-001'
    },
    {
        equipment_tag: 'T2-L0-0T61-13-HVAC-EAF-005-001',
        type: 'Fresh Air Fan',
        location: 'Terminal',
        sub_location: 'Pump Room Exhaust',
        cobie_tag: ''
    },
    {
        equipment_tag: 'T2-L0-0T61-13-HVAC-FAF-002-001',
        type: 'Fresh Air Fan',
        location: 'Terminal',
        sub_location: 'Pump Room Supply',
        cobie_tag: ''
    },
    {
        equipment_tag: 'T2-L1-MER07-HVAC-FAF-007-001',
        type: 'Fresh Air Fan',
        location: 'Terminal',
        sub_location: 'L0 CIP Lounge Arrivals',
        cobie_tag: 'T2-L1-1T13-01-HVAC-FAF-016-001'
    },
    {
        equipment_tag: 'T2-L2-76-01-HVAC-FAF-003-001',
        type: 'Fresh Air Fan',
        location: 'Terminal',
        sub_location: 'L3 HIGH ST F&B - BAR',
        cobie_tag: 'T2-L3-3T76-01A-HVAC-FAF-017-001'
    },
    {
        equipment_tag: 'T2-L3-45-21A-HVAC-FAF-006-001',
        type: 'Fresh Air Fan',
        location: 'Terminal',
        sub_location: 'L3 Celebrity Chef Restaurant',
        cobie_tag: 'T2-L3-3T45-21A-HVAC-FAF-018-001'
    },
    {
        equipment_tag: 'T2-L3-54-23-HVAC-FAF-002-001',
        type: 'Fresh Air Fan',
        location: 'Terminal',
        sub_location: 'L3 Concessions support area',
        cobie_tag: 'T2-L3-3T54-23-HVAC-FAF-019-001'
    },
    {
        equipment_tag: 'T2-L3-74-19a-HVAC-FAF-001-001',
        type: 'Fresh Air Fan',
        location: 'Terminal',
        sub_location: 'L3 International Casual Dining ',
        cobie_tag: 'T2-L3-3T74-19A-HVAC-FAF-021-001'
    },
    {
        equipment_tag: 'T2-L3-65-04-HVAC-FAF-009-001',
        type: 'Fresh Air Fan',
        location: 'Terminal',
        sub_location: 'L3 International Casual dining ',
        cobie_tag: 'T2-L3-3T65-04-HVAC-FAF-020-001'
    },
    {
        equipment_tag: 'T2-LB-BT3401-HVAC-EAF-029',
        type: 'Exhaust Fan',
        location: 'Terminal',
        sub_location: 'MLCP BAGGAGE TUNNEL',
        cobie_tag: ''
    },
    {
        equipment_tag: 'T2-LB-HVAC-EAF-035 to 036',
        type: 'Exhaust Fan',
        location: 'Terminal',
        sub_location: 'T2 Utility Tunnel Corridor',
        cobie_tag: ''
    },
    {
        equipment_tag: 'T2-LB-BT4303-HVAC-EAF-018',
        type: 'Exhaust Fan',
        location: 'Terminal',
        sub_location: 'CONCESSIONS SUPPORT AREA',
        cobie_tag: ''
    },
    {
        equipment_tag: 'T2-LB-BT4303-HVAC-EAF-019',
        type: 'Exhaust Fan',
        location: 'Terminal',
        sub_location: 'CONCESSIONS SUPPORT AREA',
        cobie_tag: ''
    },
    {
        equipment_tag: 'T2-LB-BT4303-HVAC-EAF-020',
        type: 'Exhaust Fan',
        location: 'Terminal',
        sub_location: 'CONCESSIONS SUPPORT AREA',
        cobie_tag: 'T2-LB-BT53-04-HVAC-EAF-017-001'
    },
    {
        equipment_tag: 'T2-LB-BT4303-HVAC-EAF-021',
        type: 'Exhaust Fan',
        location: 'Terminal',
        sub_location: 'CONCESSIONS SUPPORT AREA',
        cobie_tag: 'T2-LB-BT43-22-HVAC-EAF-071-001'
    },
    {
        equipment_tag: 'T2-LB-BT4303-HVAC-EAF-022',
        type: 'Exhaust Fan',
        location: 'Terminal',
        sub_location: 'CONCESSIONS SUPPORT AREA',
        cobie_tag: 'T2-LB-BT43-22-HVAC-EAF-072-001'
    },
    {
        equipment_tag: 'T2-LB-BT4105-HVAC-EAF-027',
        type: 'Exhaust Fan',
        location: 'Terminal',
        sub_location: 'REST ROOM, WET GARBAGE ',
        cobie_tag: ''
    },
    {
        equipment_tag: 'T2-LB-BT2201-HVAC-EAF-010',
        type: 'Exhaust Fan',
        location: 'Terminal',
        sub_location: 'WATER FEAT. PLANT RM',
        cobie_tag: 'T2-LB-BT22-01-HVAC-EAF-084-001'
    },
    {
        equipment_tag: 'T2-LB-BT2402-HVAC-EAF-011',
        type: 'Exhaust Fan',
        location: 'Terminal',
        sub_location: 'WATER FEAT. PLANT RM',
        cobie_tag: ''
    },
    {
        equipment_tag: 'T2-LB-BT3501-HVAC-EAF-012',
        type: 'Exhaust Fan',
        location: 'Terminal',
        sub_location: 'WATER FEAT. PLANT RM',
        cobie_tag: ''
    },
    {
        equipment_tag: 'T2-LB-BT3503-HVAC-EAF-013',
        type: 'Exhaust Fan',
        location: 'Terminal',
        sub_location: 'ELECTRICAL CLOSET',
        cobie_tag: ''
    },
    {
        equipment_tag: 'T2-LB-BT4312-HVAC-EAF-014',
        type: 'Exhaust Fan',
        location: 'Terminal',
        sub_location: 'WATER FEAT. PLANT RM',
        cobie_tag: ''
    },
    {
        equipment_tag: 'T2-LB-BT3203-HVAC-EAF-015 &016',
        type: 'Exhaust Fan',
        location: 'Terminal',
        sub_location: 'SEWAGE PUMP RM',
        cobie_tag: ''
    },
    {
        equipment_tag: 'T2-LB-BT3201-HVAC-EAF-017',
        type: 'Exhaust Fan',
        location: 'Terminal',
        sub_location: 'UTILITY CORRIDOR POINT OF ENTRY',
        cobie_tag: ''
    },
    {
        equipment_tag: 'T2-LB-BT5202-HVAC-EAF-023',
        type: 'Exhaust Fan',
        location: 'Terminal',
        sub_location: 'ELECTRICAL CLOSET',
        cobie_tag: 'T2-LB-BT52-02-HVAC-EAF-090-001'
    },
    {
        equipment_tag: 'T2-LB-BT5301-HVAC-EAF-024',
        type: 'Exhaust Fan',
        location: 'Terminal',
        sub_location: 'ELECTRICAL CLOSET',
        cobie_tag: 'T2-LB-BT53-01-HVAC-EAF-091-001'
    },
    {
        equipment_tag: 'T2-LB-BT4302-HVAC-EAF-025',
        type: 'Exhaust Fan',
        location: 'Terminal',
        sub_location: 'ELECTRICAL CLOSET',
        cobie_tag: 'T2-LB-BT43-02-HVAC-EAF-088-001'
    },
    {
        equipment_tag: 'T2-LB-BT3401-HVAC-EAF-001',
        type: 'Exhaust Fan',
        location: 'Terminal',
        sub_location: 'BAGGAGE UNLOAD/X-RAY',
        cobie_tag: 'T2-LB-BT34-01-HVAC-EAF-058-001'
    },
    {
        equipment_tag: 'T2-LB-BT3401-HVAC-EAF-002',
        type: 'Exhaust Fan',
        location: 'Terminal',
        sub_location: 'BAGGAGE UNLOAD/X-RAY',
        cobie_tag: 'T2-LB-BT34-01-HVAC-EAF-059-001'
    },
    {
        equipment_tag: 'T2-LB-BT3401-HVAC-EAF-003',
        type: 'Exhaust Fan',
        location: 'Terminal',
        sub_location: 'BAGGAGE UNLOAD/X-RAY',
        cobie_tag: 'T2-LB-BT34-01-HVAC-EAF-060-001'
    },
    {
        equipment_tag: 'T2-LB-BT3401-HVAC-EAF-004',
        type: 'Exhaust Fan',
        location: 'Terminal',
        sub_location: 'BAGGAGE UNLOAD/X-RAY',
        cobie_tag: 'T2-LB-BT34-01-HVAC-EAF-061-001'
    },
    {
        equipment_tag: 'T2-LB-BT3401-HVAC-EAF-005',
        type: 'Exhaust Fan',
        location: 'Terminal',
        sub_location: 'BAGGAGE UNLOAD/X-RAY',
        cobie_tag: 'T2-LB-BT34-01-HVAC-EAF-062-001'
    },
    {
        equipment_tag: 'T2-LB-BT3401-HVAC-EAF-006',
        type: 'Exhaust Fan',
        location: 'Terminal',
        sub_location: 'BAGGAGE UNLOAD/X-RAY',
        cobie_tag: 'T2-LB-BT34-01-HVAC-EAF-063-001'
    },
    {
        equipment_tag: 'T2-LB-BT3401-HVAC-EAF-007',
        type: 'Exhaust Fan',
        location: 'Terminal',
        sub_location: 'BAGGAGE UNLOAD/X-RAY',
        cobie_tag: 'T2-LB-BT34-01-HVAC-EAF-064-001'
    },
    {
        equipment_tag: 'T2-LB-BT3401-HVAC-EAF-008',
        type: 'Exhaust Fan',
        location: 'Terminal',
        sub_location: 'BAGGAGE UNLOAD/X-RAY',
        cobie_tag: 'T2-LB-BT34-01-HVAC-EAF-065-001'
    },
    {
        equipment_tag: 'T2-LB-BT3401-HVAC-EAF-009',
        type: 'Exhaust Fan',
        location: 'Terminal',
        sub_location: 'BAGGAGE UNLOAD/X-RAY',
        cobie_tag: 'T2-LB-BT34-01-HVAC-EAF-066-001'
    },
    {
        equipment_tag: 'T2-LB-BT3401-HVAC-EAF-028',
        type: 'Exhaust Fan',
        location: 'Terminal',
        sub_location: 'RAMP (Part plan 54)',
        cobie_tag: 'T2-LB-BT34-01-HVAC-EAF-067-001'
    },
    {
        equipment_tag: 'T2-LB-BT4303-HVAC-EAF-026',
        type: 'Exhaust Fan',
        location: 'Terminal',
        sub_location: 'SERVICE CORRIDOR',
        cobie_tag: ''
    },
    {
        equipment_tag: 'T2-L0-0T6401-HVAC-EAF-025',
        type: 'Exhaust Fan',
        location: 'Terminal',
        sub_location: 'BAGGAGE MAKEUP',
        cobie_tag: 'T2-L0-0T64-01-HVAC-EAF-073-001'
    },
    {
        equipment_tag: 'T2-L0-0T6401-HVAC-EAF-026',
        type: 'Exhaust Fan',
        location: 'Terminal',
        sub_location: 'BAGGAGE MAKEUP',
        cobie_tag: 'T2-L0-0T64-01-HVAC-EAF-074-001'
    },
    {
        equipment_tag: 'T2-L0-0T6401-HVAC-EAF-027',
        type: 'Exhaust Fan',
        location: 'Terminal',
        sub_location: 'BAGGAGE MAKEUP',
        cobie_tag: 'T2-L0-0T64-01-HVAC-EAF-075-001'
    },
    {
        equipment_tag: 'T2-L0-0T6401-HVAC-EAF-028',
        type: 'Exhaust Fan',
        location: 'Terminal',
        sub_location: 'BAGGAGE MAKEUP',
        cobie_tag: 'T2-L0-0T64-01-HVAC-EAF-076-001'
    },
    {
        equipment_tag: 'T2-L0-0T6401-HVAC-EAF-029',
        type: 'Exhaust Fan',
        location: 'Terminal',
        sub_location: 'BAGGAGE MAKEUP',
        cobie_tag: 'T2-L0-0T64-01-HVAC-EAF-077-001'
    },
    {
        equipment_tag: 'T2-L0-0T6401-HVAC-EAF-030',
        type: 'Exhaust Fan',
        location: 'Terminal',
        sub_location: 'BAGGAGE MAKEUP',
        cobie_tag: 'T2-L0-0T64-01-HVAC-EAF-078-001'
    },
    {
        equipment_tag: 'T2-L0-3315-HVAC-SEF-002',
        type: 'Exhaust Fan',
        location: 'Terminal',
        sub_location: 'MER - 07',
        cobie_tag: ''
    },
    {
        equipment_tag: 'T2-L0-3315-HVAC-SEF-001',
        type: 'Exhaust Fan',
        location: 'Terminal',
        sub_location: 'MER - 05',
        cobie_tag: 'T2-L0-0T33-15-HVAC-SEF-001-001'
    },
    {
        equipment_tag: 'T2-L0-3315-HVAC-SEF-003',
        type: 'Exhaust Fan',
        location: 'Terminal',
        sub_location: 'MER - 06',
        cobie_tag: 'T2-L0-0T45-15-HVAC-SEF-003-001'
    },
    {
        equipment_tag: 'T2-L0-6107-HVAC-SEF-001',
        type: 'Exhaust Fan',
        location: 'Terminal',
        sub_location: 'MER - 04',
        cobie_tag: ''
    },
    {
        equipment_tag: 'T2-L0-0T5117-HVAC-EAF-019',
        type: 'Exhaust Fan',
        location: 'Terminal',
        sub_location: 'SS2 BATTERY ROOM',
        cobie_tag: ''
    },
    {
        equipment_tag: 'T2-L0-0T1338-HVAC-EAF-003',
        type: 'Exhaust Fan',
        location: 'Terminal',
        sub_location: 'TOILET',
        cobie_tag: ''
    },
    {
        equipment_tag: 'T2-L0-0T1608-HVAC-EAF-004',
        type: 'Exhaust Fan',
        location: 'Terminal',
        sub_location: 'TOILET',
        cobie_tag: ''
    },
    {
        equipment_tag: 'T2-L0-MER01-HVAC-EAF-005',
        type: 'Exhaust Fan',
        location: 'Terminal',
        sub_location: 'TOILET',
        cobie_tag: 'T2-L0-0T31-07-HVAC-SEF-020-001'
    },
    {
        equipment_tag: 'T2-L0-MER01-HVAC-EAF-006',
        type: 'Exhaust Fan',
        location: 'Terminal',
        sub_location: 'ELECTRICAL CLOSET',
        cobie_tag: 'T2-L0-0T31-07-HVAC-EAF-039-001'
    },
    {
        equipment_tag: 'T2-L0-MER01-HVAC-EAF-007',
        type: 'Exhaust Fan',
        location: 'Terminal',
        sub_location: 'TOILET',
        cobie_tag: 'T2-L0-0T31-07-HVAC-EAF-012-001'
    },
    {
        equipment_tag: 'T2-L0-MER01-HVAC-EAF-008',
        type: 'Exhaust Fan',
        location: 'Terminal',
        sub_location: 'ELECTRICAL SUBSTATION 1 ',
        cobie_tag: 'T2-L0-0T31-07-HVAC-EAF-028-001'
    },
    {
        equipment_tag: 'T2-L0-MER01-HVAC-EAF-009',
        type: 'Exhaust Fan',
        location: 'Terminal',
        sub_location: 'STAFF WELLNESS VILLAGE - ',
        cobie_tag: 'T2-L0-0T31-07-HVAC-EAF-020-001'
    },
    {
        equipment_tag: 'T2-L0-MER05-HVAC-EAF-010',
        type: 'Exhaust Fan',
        location: 'Terminal',
        sub_location: 'ELECTRICAL CLOSET & FP VALVES ROOM',
        cobie_tag: 'T2-L0-0T33-15-HVAC-EAF-004-001'
    },
    {
        equipment_tag: 'T2-L0-0T4102B-HVAC-EAF-011',
        type: 'Exhaust Fan',
        location: 'Terminal',
        sub_location: 'ELECTRICAL CLOSET',
        cobie_tag: 'T2-L0-0T33-15-HVAC-EAF-004-001'
    },
    {
        equipment_tag: 'T2-L0-0T3106-HVAC-EAF-012',
        type: 'Exhaust Fan',
        location: 'Terminal',
        sub_location: 'TOILET',
        cobie_tag: ''
    },
    {
        equipment_tag: 'T2-L0-MER05-HVAC-EAF-014',
        type: 'Exhaust Fan',
        location: 'Terminal',
        sub_location: 'TOILET',
        cobie_tag: 'T2-L0-0T4102-01-HVAC-EAF-006-001'
    },
    {
        equipment_tag: 'T2-L0-MER06-HVAC-EAF-015',
        type: 'Exhaust Fan',
        location: 'Terminal',
        sub_location: 'ELECTRICAL CLOSET',
        cobie_tag: ''
    },
    {
        equipment_tag: 'T2-L0-0T5324-HVAC-EAF-021',
        type: 'Exhaust Fan',
        location: 'Terminal',
        sub_location: 'ELECTRICAL CLOSET',
        cobie_tag: ''
    },
    {
        equipment_tag: 'T2-L0-MER06-HVAC-EAF-017',
        type: 'Exhaust Fan',
        location: 'Terminal',
        sub_location: 'TOILET',
        cobie_tag: ''
    },
    {
        equipment_tag: 'T2-L0-MER02A-HVAC-EAF-018',
        type: 'Exhaust Fan',
        location: 'Terminal',
        sub_location: 'ELECTRICAL SUBSTATION 2 ',
        cobie_tag: 'T2-L0-0T51-01-HVAC-EAF-027-001'
    },
    {
        equipment_tag: 'T2-L0-MER02B-HVAC-EAF-020',
        type: 'Exhaust Fan',
        location: 'Terminal',
        sub_location: 'ELECTRICAL CLOSET',
        cobie_tag: ''
    },
    {
        equipment_tag: 'T2-L0-MER03-HVAC-EAF-022',
        type: 'Exhaust Fan',
        location: 'Terminal',
        sub_location: 'TOILET',
        cobie_tag: 'T2-L0-0T61-07-HVAC-EAF-022-001'
    },
    {
        equipment_tag: 'T2-L0-MER03-HVAC-EAF-023',
        type: 'Exhaust Fan',
        location: 'Terminal',
        sub_location: 'ELECTRICAL CLOSET',
        cobie_tag: 'T2-L0-0T61-07-HVAC-EAF-040-001'
    },
    {
        equipment_tag: 'T2-L0-MER03-HVAC-EAF-024',
        type: 'Exhaust Fan',
        location: 'Terminal',
        sub_location: 'TOILET',
        cobie_tag: 'T2-L0-0T61-07-HVAC-EAF-044-001'
    },
    {
        equipment_tag: 'T2-L0-MER11-HVAC-EAF-032',
        type: 'Exhaust Fan',
        location: 'Terminal',
        sub_location: 'ELECTRICAL SUBSTATION 5, ',
        cobie_tag: 'T2-L0-0T75-05-HVAC-EAF-029-001'
    },
    {
        equipment_tag: 'T2-L0-MER11-HVAC-EAF-033',
        type: 'Exhaust Fan',
        location: 'Terminal',
        sub_location: 'ELECTRICAL CLOSET',
        cobie_tag: ''
    },
    {
        equipment_tag: 'T2-L0-MER02A-HVAC-EAF-034',
        type: 'Exhaust Fan',
        location: 'Terminal',
        sub_location: 'TOILET',
        cobie_tag: 'T2-L0-0T51-01-HVAC-EAF-021-001'
    },
    {
        equipment_tag: 'T2-L0-0T72-20-HVAC-EAF-003-001',
        type: 'Exhaust Fan',
        location: 'Terminal',
        sub_location: 'BATTERY ROOM',
        cobie_tag: ''
    },
    {
        equipment_tag: 'T2-L0-0T72-18-HVAC-EAF-001-001',
        type: 'Exhaust Fan',
        location: 'Terminal',
        sub_location: 'ELECTRICAL SUBSTATION',
        cobie_tag: ''
    },
    {
        equipment_tag: 'T2-L0-0T72-18-HVAC-EAF-001-002',
        type: 'Exhaust Fan',
        location: 'Terminal',
        sub_location: 'ELECTRICAL SUBSTATION',
        cobie_tag: ''
    },
    {
        equipment_tag: 'T2-L0-0T72-18-HVAC-EAF-001-003',
        type: 'Exhaust Fan',
        location: 'Terminal',
        sub_location: 'ELECTRICAL SUBSTATION',
        cobie_tag: ''
    },
    {
        equipment_tag: 'T2-L0-0T44-XX-HVAC-EAF-004-001',
        type: 'Exhaust Fan',
        location: 'Terminal',
        sub_location: 'Battery Room SS3A',
        cobie_tag: ''
    },
    {
        equipment_tag: 'T2-L0-0T0409-HVAC-EAF-001',
        type: 'Exhaust Fan',
        location: 'Terminal',
        sub_location: 'ELECTRICAL CLOSET',
        cobie_tag: ''
    },
    {
        equipment_tag: 'T2-L0-0T0510-HVAC-EAF-002',
        type: 'Exhaust Fan',
        location: 'Terminal',
        sub_location: 'ELECTRICAL CLOSET',
        cobie_tag: ''
    },
    {
        equipment_tag: 'T2-L0-0T7509B-HVAC-EAF-031',
        type: 'Exhaust Fan',
        location: 'Terminal',
        sub_location: 'SS5 BATTERY ROOM',
        cobie_tag: ''
    },
    {
        equipment_tag: 'T2-L0-MER06-HVAC-EAF-016',
        type: 'Exhaust Fan',
        location: 'Terminal',
        sub_location: 'SS4 BATTERY ROOM',
        cobie_tag: ''
    },
    {
        equipment_tag: 'T2-L0-0T61-13-HVAC-EAF-005-001',
        type: 'Exhaust Fan',
        location: 'Terminal',
        sub_location: 'Pump Room Exhaust',
        cobie_tag: ''
    },
    {
        equipment_tag: 'T2-L0-0T4102B-HVAC-EAF-013',
        type: 'Exhaust Fan',
        location: 'Terminal',
        sub_location: 'SS1 BATTERY ROOM',
        cobie_tag: 'T2-L0-0T41-02B-HVAC-EAF-003-001'
    },
    {
        equipment_tag: 'T2-L0-6301-HVAC-SEF-001',
        type: 'Exhaust Fan',
        location: 'Terminal',
        sub_location: 'L0 - ARRIVAL PIER ZONE 0.5',
        cobie_tag: 'T2-L0-0T63-01-HVAC-SEF-004-001'
    },
    {
        equipment_tag: 'T2-L0-6301-HVAC-SEF-002',
        type: 'Exhaust Fan',
        location: 'Terminal',
        sub_location: 'L1 - ARRIVAL PIER ZONE 1.2',
        cobie_tag: ''
    },
    {
        equipment_tag: 'T2-L1-MER09-HVAC-EAF-001',
        type: 'Exhaust Fan',
        location: 'Terminal',
        sub_location: 'MER-9',
        cobie_tag: 'T2-L1-1T53-05-HVAC-EAF-079-001'
    },
    {
        equipment_tag: 'T2-L1-5305-HVAC-SEF-001',
        type: 'Exhaust Fan',
        location: 'Terminal',
        sub_location: 'MER - 09',
        cobie_tag: 'T2-L0-0T53-05-HVAC-SEF-007-001'
    },
    {
        equipment_tag: 'T2-L1-5305-HVAC-SEF-002',
        type: 'Exhaust Fan',
        location: 'Terminal',
        sub_location: 'MER - 09',
        cobie_tag: 'T2-L1-1T53-05-HVAC-SEF-007-002'
    },
    {
        equipment_tag: 'T2-L1-7520-HVAC-SEF-001',
        type: 'Exhaust Fan',
        location: 'Terminal',
        sub_location: 'MER - 11',
        cobie_tag: ''
    },
    {
        equipment_tag: 'T2-L1-MER13-HVAC-EAF-002',
        type: 'Exhaust Fan',
        location: 'Terminal',
        sub_location: 'TOILET, LACTATION LOUNGE',
        cobie_tag: 'T2-L1-1T75-16-HVAC-EAF-041-001'
    },
    {
        equipment_tag: 'T2-L2-MER09-HVAC-EAF-015',
        type: 'Exhaust Fan',
        location: 'Terminal',
        sub_location: 'MER-9',
        cobie_tag: 'T2-L1-1T53-05-HVAC-EAF-080-001'
    },
    {
        equipment_tag: 'T2-L2-MER07-HVAC-EAF-001',
        type: 'Exhaust Fan',
        location: 'Terminal',
        sub_location: 'TOILET, QUARANTINE LAB',
        cobie_tag: 'T2-L1-1T13-01-HVAC-EAF-045-001'
    },
    {
        equipment_tag: 'T2-L2-MER07-HVAC-EAF-002',
        type: 'Exhaust Fan',
        location: 'Terminal',
        sub_location: 'ELECTRICAL CLOSET',
        cobie_tag: 'T2-L1-1T13-01-HVAC-EAF-023-001'
    },
    {
        equipment_tag: 'T2-L2-0T3302-HVAC-EAF-003',
        type: 'Exhaust Fan',
        location: 'Terminal',
        sub_location: 'TOILET',
        cobie_tag: ''
    },
    {
        equipment_tag: 'T2-L2-1T3302-HVAC-EAF-004',
        type: 'Exhaust Fan',
        location: 'Terminal',
        sub_location: 'ELECTRICAL CLOSET',
        cobie_tag: ''
    },
    {
        equipment_tag: 'T2-L2-0T3503-HVAC-EAF-006',
        type: 'Exhaust Fan',
        location: 'Terminal',
        sub_location: 'ELECTRICAL SUBSTATION 3 ',
        cobie_tag: ''
    },
    {
        equipment_tag: 'T2-L2-0T3503-HVAC-EAF-007',
        type: 'Exhaust Fan',
        location: 'Terminal',
        sub_location: 'ELECTRICAL CLOSET',
        cobie_tag: ''
    },
    {
        equipment_tag: 'T2-L2-0T3503-HVAC-EAF-008',
        type: 'Exhaust Fan',
        location: 'Terminal',
        sub_location: 'TOILET',
        cobie_tag: ''
    },
    {
        equipment_tag: 'T2-L2-0T4501-HVAC-EAF-010',
        type: 'Exhaust Fan',
        location: 'Terminal',
        sub_location: 'ELECTRICAL CLOSET ',
        cobie_tag: ''
    },
    {
        equipment_tag: 'T2-L2-0T4501-HVAC-EAF-011',
        type: 'Exhaust Fan',
        location: 'Terminal',
        sub_location: 'ELECTRICAL SUBSTATION 4 ',
        cobie_tag: ''
    },
    {
        equipment_tag: 'T2-L2-MER09-HVAC-EAF-014',
        type: 'Exhaust Fan',
        location: 'Terminal',
        sub_location: 'MER 9',
        cobie_tag: 'T2-L1-1T53-05-HVAC-EAF-007-001'
    },
    {
        equipment_tag: 'T2-L2-MER09-HVAC-EAF-016',
        type: 'Exhaust Fan',
        location: 'Terminal',
        sub_location: 'MER 9',
        cobie_tag: 'T2-L1-1T53-05-HVAC-EAF-019-001'
    },
    {
        equipment_tag: 'T2-L2-MER04-HVAC-EAF-018',
        type: 'Exhaust Fan',
        location: 'Terminal',
        sub_location: 'MER 4',
        cobie_tag: ''
    },
    {
        equipment_tag: 'T2-L2-MER04-HVAC-EAF-019',
        type: 'Exhaust Fan',
        location: 'Terminal',
        sub_location: 'MER 4',
        cobie_tag: ''
    },
    {
        equipment_tag: 'T2-L2-0T65XX-HVAC-EAF-020',
        type: 'Exhaust Fan',
        location: 'Terminal',
        sub_location: 'TOILET, PRAYER ROOM, SPA SHOWER',
        cobie_tag: ''
    },
    {
        equipment_tag: 'T2-L2-MER12-HVAC-EAF-021',
        type: 'Exhaust Fan',
        location: 'Terminal',
        sub_location: 'MER 12',
        cobie_tag: 'T2-L1-1T75-20-HVAC-EAF-024-001'
    },
    {
        equipment_tag: 'T2-L2-MER12-HVAC-EAF-022',
        type: 'Exhaust Fan',
        location: 'Terminal',
        sub_location: 'MER 12',
        cobie_tag: 'T2-L1-1T75-20-HVAC-EAF-043-001'
    },
    {
        equipment_tag: 'T2-L2-MER12-HVAC-EAF-023',
        type: 'Exhaust Fan',
        location: 'Terminal',
        sub_location: 'MER 12',
        cobie_tag: 'T2-L1-1T75-20-HVAC-EAF-013-001'
    },
    {
        equipment_tag: 'T2-L2-MER13-HVAC-EAF-024',
        type: 'Exhaust Fan',
        location: 'Terminal',
        sub_location: 'MER 13',
        cobie_tag: 'T2-L1-1T75-16-HVAC-EAF-025-001'
    },
    {
        equipment_tag: 'T2-L2-MER13-HVAC-EAF-025',
        type: 'Exhaust Fan',
        location: 'Terminal',
        sub_location: 'MER 13',
        cobie_tag: 'T2-L1-1T75-16-HVAC-EAF-008-001'
    },
    {
        equipment_tag: 'T2-L2-MER07-HVAC-EAF-026',
        type: 'Exhaust Fan',
        location: 'Terminal',
        sub_location: 'MER 7',
        cobie_tag: 'T2-L1-1T13-01-HVAC-EAF-045-001'
    },
    {
        equipment_tag: 'T2-L2-0T4501-HVAC-EAF-009',
        type: 'Exhaust Fan',
        location: 'Terminal',
        sub_location: 'ELECTRICAL SUBSTATION 4 ',
        cobie_tag: ''
    },
    {
        equipment_tag: 'T2-L2-0T3503-HVAC-EAF-005',
        type: 'Exhaust Fan',
        location: 'Terminal',
        sub_location: 'SS3 BATTERY ROOM',
        cobie_tag: 'T2-L0-0T35-03-HVAC-EAF-053-001'
    },
    {
        equipment_tag: 'T2-L2-MER09-HVAC-EAF-012',
        type: 'Exhaust Fan',
        location: 'Terminal',
        sub_location: 'MER 9',
        cobie_tag: 'T2-L1-1T53-05-HVAC-EAF-055-001'
    },
    {
        equipment_tag: 'T2-L2-MER09-HVAC-EAF-013',
        type: 'Exhaust Fan',
        location: 'Terminal',
        sub_location: 'MER 9',
        cobie_tag: 'T2-L1-1T53-05-HVAC-EAF-056-001'
    },
    {
        equipment_tag: 'T2-L2-MER04-HVAC-EAF-017',
        type: 'Exhaust Fan',
        location: 'Terminal',
        sub_location: 'MER 4',
        cobie_tag: ''
    },
    {
        equipment_tag: 'T2-L3-3T4517-HVAC-EAF-001',
        type: 'Exhaust Fan',
        location: 'Terminal',
        sub_location: 'MENS TOILET 3T45-17',
        cobie_tag: ''
    },
    {
        equipment_tag: 'T2-L4-21-HVAC-KX-013',
        type: 'Kitchen EF',
        location: 'Terminal',
        sub_location: 'Level-0 Staff Canteen',
        cobie_tag: ''
    },
    {
        equipment_tag: 'T2-L4-74-HVAC-KX-001',
        type: 'Kitchen EF',
        location: 'Terminal',
        sub_location: 'Roof Slab',
        cobie_tag: 'T2-L4-4T74-07A-HVAC-KX-004-001'
    },
    {
        equipment_tag: 'T2-L4-73-HVAC-KX-004',
        type: 'Kitchen EF',
        location: 'Terminal',
        sub_location: 'Roof Slab',
        cobie_tag: 'T2-L3-3T73-11A-HVAC-KX-005-001'
    },
    {
        equipment_tag: 'T2-L4-74-HVAC-KX-005',
        type: 'Kitchen EF',
        location: 'Terminal',
        sub_location: 'Roof Slab',
        cobie_tag: 'T2-L4-4T74-07A-HVAC-KX-006-001'
    },
    {
        equipment_tag: 'T2-L4-75-HVAC-KX-007',
        type: 'Kitchen EF',
        location: 'Terminal',
        sub_location: 'Roof Slab',
        cobie_tag: 'T2-L4-4T75-01-HVAC-KX-006-001'
    },
    {
        equipment_tag: 'T2-L4-76-HVAC-KX-008',
        type: 'Kitchen EF',
        location: 'Terminal',
        sub_location: 'Roof Slab',
        cobie_tag: 'T2-L4-4T76-01-HVAC-KX-007-001'
    },
    {
        equipment_tag: 'T2-L4-75-HVAC-KX-009',
        type: 'Kitchen EF',
        location: 'Terminal',
        sub_location: 'Roof Slab',
        cobie_tag: 'T2-L4-4T75-08D-HVAC-KX-006-001'
    },
    {
        equipment_tag: 'T2-L0-MER 07-HVAC-KX-007-001',
        type: 'Kitchen EF',
        location: 'Terminal',
        sub_location: 'MER-07',
        cobie_tag: 'T2-L1-1T13-01-HVAC-KX-003-001'
    },
    {
        equipment_tag: 'T2-L0-15-18A-HVAC-KX-008-001',
        type: 'Kitchen EF',
        location: 'Terminal',
        sub_location: 'Day Hotel',
        cobie_tag: ''
    },
    {
        equipment_tag: 'T2-L0-75-02-HVAC-KX-009-001',
        type: 'Kitchen EF',
        location: 'Terminal',
        sub_location: 'Concessions support area',
        cobie_tag: 'T2-L0-0T75-02-HVAC-KX-002-001'
    },
    {
        equipment_tag: 'T2-L0-75-02-HVAC-KX-009-002',
        type: 'Kitchen EF',
        location: 'Terminal',
        sub_location: 'Concessions support area',
        cobie_tag: 'T2-L0-0T75-02-HVAC-KX-002-002'
    },
    {
        equipment_tag: 'T2-L5-54-HVAC-TR-001',
        type: 'Smoke EF',
        location: 'Terminal',
        sub_location: 'TRASH CHUTE ROOM',
        cobie_tag: ''
    },
    {
        equipment_tag: 'T2-L5-53-HVAC-TR-002',
        type: 'Smoke EF',
        location: 'Terminal',
        sub_location: 'TRASH CHUTE ROOM',
        cobie_tag: ''
    },
    {
        equipment_tag: 'T2-L5-54-HVAC-TR-003',
        type: 'Smoke EF',
        location: 'Terminal',
        sub_location: 'TRASH CHUTE ROOM',
        cobie_tag: ''
    },
    {
        equipment_tag: 'T2-L5-23031-HVAC-SEF-001 ',
        type: 'Smoke EF',
        location: 'Terminal',
        sub_location: 'L3 - DEPARTURE ZONE 3.1a',
        cobie_tag: ''
    },
    {
        equipment_tag: 'T2-L5-23031-HVAC-SEF-002',
        type: 'Smoke EF',
        location: 'Terminal',
        sub_location: 'L3 - DEPARTURE ZONE 3.1a',
        cobie_tag: ''
    },
    {
        equipment_tag: 'T2-L5-23031-HVAC-SEF-003',
        type: 'Smoke EF',
        location: 'Terminal',
        sub_location: 'L3 - DEPARTURE ZONE 3.1a',
        cobie_tag: ''
    },
    {
        equipment_tag: 'T2-L5-24032-HVAC-SEF-001',
        type: 'Smoke EF',
        location: 'Terminal',
        sub_location: 'L3 - DEPARTURE ZONE 3.1b',
        cobie_tag: ''
    },
    {
        equipment_tag: 'T2-L5-24032-HVAC-SEF-002',
        type: 'Smoke EF',
        location: 'Terminal',
        sub_location: 'L3 - DEPARTURE ZONE 3.1b',
        cobie_tag: ''
    },
    {
        equipment_tag: 'T2-L5-24032-HVAC-SEF-003',
        type: 'Smoke EF',
        location: 'Terminal',
        sub_location: 'L3 - DEPARTURE ZONE 3.1b',
        cobie_tag: ''
    },
    {
        equipment_tag: 'T2-L5-33314-HVAC-SEF-001',
        type: 'Smoke EF',
        location: 'Terminal',
        sub_location: 'L3 - DEPARTURE ZONE 3.2a',
        cobie_tag: ''
    },
    {
        equipment_tag: 'T2-L5-33314-HVAC-SEF-002',
        type: 'Smoke EF',
        location: 'Terminal',
        sub_location: 'L3 - DEPARTURE ZONE 3.2a',
        cobie_tag: ''
    },
    {
        equipment_tag: 'T2-L5-33314-HVAC-SEF-003',
        type: 'Smoke EF',
        location: 'Terminal',
        sub_location: 'L3 - DEPARTURE ZONE 3.2a',
        cobie_tag: ''
    },
    {
        equipment_tag: 'T2-L5-33314-HVAC-SEF-004',
        type: 'Smoke EF',
        location: 'Terminal',
        sub_location: 'L3 - DEPARTURE ZONE 3.2a',
        cobie_tag: ''
    },
    {
        equipment_tag: 'T2-L5-34314-HVAC-SEF-005',
        type: 'Smoke EF',
        location: 'Terminal',
        sub_location: 'L3 - DEPARTURE ZONE 3.2a',
        cobie_tag: ''
    },
    {
        equipment_tag: 'T2-L5-34033-HVAC-SEF-001',
        type: 'Smoke EF',
        location: 'Terminal',
        sub_location: 'L3 - DEPARTURE ZONE 3.2b',
        cobie_tag: ''
    },
    {
        equipment_tag: 'T2-L5-34033-HVAC-SEF-002',
        type: 'Smoke EF',
        location: 'Terminal',
        sub_location: 'L3 - DEPARTURE ZONE 3.2b',
        cobie_tag: ''
    },
    {
        equipment_tag: 'T2-L5-35033-HVAC-SEF-003',
        type: 'Smoke EF',
        location: 'Terminal',
        sub_location: 'L3 - DEPARTURE ZONE 3.2b',
        cobie_tag: ''
    },
    {
        equipment_tag: 'T2-L5-35033-HVAC-SEF-004',
        type: 'Smoke EF',
        location: 'Terminal',
        sub_location: 'L3 - DEPARTURE ZONE 3.2b',
        cobie_tag: ''
    },
    {
        equipment_tag: 'T2-L5-53034-HVAC-SEF-001',
        type: 'Smoke EF',
        location: 'Terminal',
        sub_location: 'L3 - DEPARTURE ZONE 3.3',
        cobie_tag: ''
    },
    {
        equipment_tag: 'T2-L5-63034-HVAC-SEF-002',
        type: 'Smoke EF',
        location: 'Terminal',
        sub_location: 'L3 - DEPARTURE ZONE 3.3',
        cobie_tag: ''
    },
    {
        equipment_tag: 'T2-L5-54034-HVAC-SEF-003',
        type: 'Smoke EF',
        location: 'Terminal',
        sub_location: 'L3 - DEPARTURE ZONE 3.3',
        cobie_tag: ''
    },
    {
        equipment_tag: 'T2-L5-64034-HVAC-SEF-004',
        type: 'Smoke EF',
        location: 'Terminal',
        sub_location: 'L3 - DEPARTURE ZONE 3.3',
        cobie_tag: 'T2-L4-4T75-08C-HVAC-SEF-013-001'
    },
    {
        equipment_tag: 'T2-L5-63313-HVAC-SEF-001',
        type: 'Smoke EF',
        location: 'Terminal',
        sub_location: 'L3 - DEPARTURE ZONE 3.4',
        cobie_tag: ''
    },
    {
        equipment_tag: 'T2-L5-64313-HVAC-SEF-002',
        type: 'Smoke EF',
        location: 'Terminal',
        sub_location: 'L3 - DEPARTURE ZONE 3.4',
        cobie_tag: 'T2-L4-4T64-05-HVAC-SEF-014-001'
    },
    {
        equipment_tag: 'T2-L5-64313-HVAC-SEF-003',
        type: 'Smoke EF',
        location: 'Terminal',
        sub_location: 'L3 - DEPARTURE ZONE 3.4',
        cobie_tag: 'T2-L4-4T75-08C-HVAC-SEF-014-001'
    },
    {
        equipment_tag: 'T2-L5-64313-HVAC-SEF-004',
        type: 'Smoke EF',
        location: 'Terminal',
        sub_location: 'L3 - DEPARTURE ZONE 3.4',
        cobie_tag: 'T2-L3-3TPA-06A-HVAC-SEF-014-001'
    },
    {
        equipment_tag: 'T2-L5-65313-HVAC-SEF-005',
        type: 'Smoke EF',
        location: 'Terminal',
        sub_location: 'L3 - DEPARTURE ZONE 3.4',
        cobie_tag: 'T2-L4-4T75-08C-HVAC-SEF-013-002'
    },
    {
        equipment_tag: 'T2-L4-74035-HVAC-SEF-001,',
        type: 'Smoke EF',
        location: 'Terminal',
        sub_location: 'L3 - DEPARTURE ZONE 3.5, ',
        cobie_tag: 'T2-L3-3T74-35-HVAC-SEF-009-001'
    },
    {
        equipment_tag: 'T2-L4-76035-HVAC-SEF-002, ',
        type: 'Smoke EF',
        location: 'Terminal',
        sub_location: 'L3 - DEPARTURE ZONE 3.5, ',
        cobie_tag: 'T2-L3-3TPA-06A-HVAC-SEF-009-001'
    },
    {
        equipment_tag: 'T2-L4-74038-HVAC-SEF-001, ',
        type: 'Smoke EF',
        location: 'Terminal',
        sub_location: 'L3 - DEPARTURE ZONE 3.6, ',
        cobie_tag: 'T2-L3-3TPA-05D-HVAC-SEF-009-001'
    },
    {
        equipment_tag: 'T2-L4-74038-HVAC-SEF-002,',
        type: 'Smoke EF',
        location: 'Terminal',
        sub_location: 'L3 - DEPARTURE ZONE 3.6, ',
        cobie_tag: 'T2-L3-3TPA-05D-HVAC-SEF-009-002'
    },
    {
        equipment_tag: 'T2-L4-77036-HVAC-SEF-001, ',
        type: 'Smoke EF',
        location: 'Terminal',
        sub_location: 'L3 - DEPARTURE PIER ZONE 3.7a, ',
        cobie_tag: ''
    },
    {
        equipment_tag: 'T2-L4-78036-HVAC-SEF-002, ',
        type: 'Smoke EF',
        location: 'Terminal',
        sub_location: 'L3 - DEPARTURE PIER ZONE 3.7a,',
        cobie_tag: ''
    },
    {
        equipment_tag: 'T2-L4-74037-HVAC-SEF-001, ',
        type: 'Smoke EF',
        location: 'Terminal',
        sub_location: 'L3 - DEPARTURE PIER ZONE 3.7b,',
        cobie_tag: ''
    },
    {
        equipment_tag: 'T2-L4-76037-HVAC-SEF-002, ',
        type: 'Smoke EF',
        location: 'Terminal',
        sub_location: 'L3 - DEPARTURE PIER ZONE 3.7b',
        cobie_tag: ''
    },
    {
        equipment_tag: 'T2-L4-71039-HVAC-SEF-001, ',
        type: 'Smoke EF',
        location: 'Terminal',
        sub_location: 'L3 - DEPARTURE PIER ZONE 3.7c,',
        cobie_tag: ''
    },
    {
        equipment_tag: 'T2-L4-73039-HVAC-SEF-002, ',
        type: 'Smoke EF',
        location: 'Terminal',
        sub_location: 'L3 - DEPARTURE PIER ZONE 3.7c, ',
        cobie_tag: ''
    },
    {
        equipment_tag: 'T2-L4-61310-HVAC-SEF-001, ',
        type: 'Smoke EF',
        location: 'Terminal',
        sub_location: 'L3 - DEPARTURE PIER ZONE 3.7d, ',
        cobie_tag: ''
    },
    {
        equipment_tag: 'T2-L4-71310-HVAC-SEF-002, ',
        type: 'Smoke EF',
        location: 'Terminal',
        sub_location: 'L3 - DEPARTURE PIER ZONE 3.7d,',
        cobie_tag: ''
    },
    {
        equipment_tag: 'T2-L4-41311-HVAC-SEF-001, ',
        type: 'Smoke EF',
        location: 'Terminal',
        sub_location: 'L3 - DEPARTURE PIER ZONE 3.7e, ',
        cobie_tag: ''
    },
    {
        equipment_tag: 'T2-L4-51311-HVAC-SEF-002, ',
        type: 'Smoke EF',
        location: 'Terminal',
        sub_location: 'L3 - DEPARTURE PIER ZONE 3.7e, ',
        cobie_tag: ''
    },
    {
        equipment_tag: 'T2-L4-21312-HVAC-SEF-001,',
        type: 'Smoke EF',
        location: 'Terminal',
        sub_location: 'L3 - DEPARTURE PIER ZONE 3.7f,',
        cobie_tag: ''
    },
    {
        equipment_tag: 'T2-L4-31312-HVAC-SEF-002',
        type: 'Smoke EF',
        location: 'Terminal',
        sub_location: 'L3 - DEPARTURE PIER ZONE 3.7f',
        cobie_tag: ''
    },
    {
        equipment_tag: 'T2-LB-BT4203-HVAC-HW-B06',
        type: 'CH Hi Wall',
        location: 'Terminal',
        sub_location: 'STAFF SECURITY OFFICE (bt42-03)',
        cobie_tag: ''
    },
    {
        equipment_tag: 'T2-LB-BT5104-HVAC-HW-002',
        type: 'CH Hi Wall',
        location: 'Terminal',
        sub_location: 'Waste RM (BT51-04)',
        cobie_tag: ''
    },
    {
        equipment_tag: 'T2-LB-BT5107-HVAC-HW-B02',
        type: 'CH Hi Wall',
        location: 'Terminal',
        sub_location: 'Service RM (BT51-07)',
        cobie_tag: ''
    },
    {
        equipment_tag: 'T2-LB-BT5108-HVAC-HW-B03',
        type: 'CH Hi Wall',
        location: 'Terminal',
        sub_location: 'Recycle Paper (BT51-08)',
        cobie_tag: ''
    },
    {
        equipment_tag: 'T2-LB-BT5109-HVAC-HW-B04',
        type: 'CH Hi Wall',
        location: 'Terminal',
        sub_location: 'Recycle Plastic (BT51-09)',
        cobie_tag: ''
    },
    {
        equipment_tag: 'T2-LB-BT5110-HVAC-HW-B05',
        type: 'CH Hi Wall',
        location: 'Terminal',
        sub_location: 'Waste RM (BT51-10)',
        cobie_tag: ''
    },
    {
        equipment_tag: 'T2-L3-3T1408-HVAC-DXCSU-301',
        type: 'DX Ductable',
        location: 'Terminal',
        sub_location: 'ELEVATOR SHAFT, 3T14-08',
        cobie_tag: ''
    },
    {
        equipment_tag: 'T2-L3-3T1408-HVAC-DXCSU-302',
        type: 'DX Ductable',
        location: 'Terminal',
        sub_location: 'ELEVATOR SHAFT, 3T15-13',
        cobie_tag: ''
    },
    {
        equipment_tag: 'T2-L0-0T72-20-HVAC-CAS-001-001',
        type: 'Dx Cassette',
        location: 'Terminal',
        sub_location: 'T-72',
        cobie_tag: ''
    },
    {
        equipment_tag: 'T2-BT-BT41-05-HVAC-DAC-005-001',
        type: 'Air Curtain',
        location: 'Terminal',
        sub_location: 'BT41-05A',
        cobie_tag: 'T2-LB-BT41-05-HVAC-DAC-003-001'
    },
    {
        equipment_tag: 'T2-BT-BT41-02-HVAC-DAC-005-001',
        type: 'Air Curtain',
        location: 'Terminal',
        sub_location: 'BT41-02C',
        cobie_tag: 'T2-LB-BT41-02-HVAC-DAC-003-001'
    },
    {
        equipment_tag: 'T2-BT-BT41-03-HVAC-DAC-001-001',
        type: 'Air Curtain',
        location: 'Terminal',
        sub_location: 'BT41-04B',
        cobie_tag: 'T2-LB-BT41-03-HVAC-DAC-001-001'
    },
    {
        equipment_tag: 'T2-BT-BT51-10-HVAC-DAC-001-001',
        type: 'Air Curtain',
        location: 'Terminal',
        sub_location: 'BT51-10A',
        cobie_tag: 'T2-LB-BT51-10-HVAC-DAC-001-001'
    },
    {
        equipment_tag: 'T2-BT-BT51-04-HVAC-DAC-005-001',
        type: 'Air Curtain',
        location: 'Terminal',
        sub_location: 'BT51-04A',
        cobie_tag: 'T2-LB-BT51-04-HVAC-DAC-003-001'
    },
    {
        equipment_tag: 'T2-BT-BT51-04-HVAC-DAC-005-002',
        type: 'Air Curtain',
        location: 'Terminal',
        sub_location: 'BT51-14A',
        cobie_tag: 'T2-LB-BT51-04-HVAC-DAC-003-002'
    },
    {
        equipment_tag: 'T2-BT-BT51-14-HVAC-DAC-005-001',
        type: 'Air Curtain',
        location: 'Terminal',
        sub_location: 'BT41-04A',
        cobie_tag: 'T2-LB-BT51-14-HVAC-DAC-003-001'
    },
    {
        equipment_tag: 'T2-BT-BT43-23-HVAC-DAC-005-001',
        type: 'Air Curtain',
        location: 'Terminal',
        sub_location: 'BT43-03B',
        cobie_tag: 'T2-LB-BT43-23-HVAC-DAC-003-001'
    },
    {
        equipment_tag: 'T2-L0-0T21-11-HVAC-DAC-005-001',
        type: 'Air Curtain',
        location: 'Terminal',
        sub_location: '0T21-E-01',
        cobie_tag: 'T2-L0-0T21-11-HVAC-DAC-003-001'
    },
    {
        equipment_tag: 'T2-L0-0T21-11-HVAC-DAC-005-002',
        type: 'Air Curtain',
        location: 'Terminal',
        sub_location: '0T31-E-02',
        cobie_tag: 'T2-L0-0T21-11-HVAC-DAC-003-002'
    },
    {
        equipment_tag: 'T2-L0-0T31-06-1-HVAC-DAC-001-001',
        type: 'Air Curtain',
        location: 'Terminal',
        sub_location: '0T41-E-03',
        cobie_tag: 'T2-L0-0T31-06-HVAC-DAC-001-001'
    },
    {
        equipment_tag: 'T2-L0-0T31-06-2-HVAC-DAC-005-001',
        type: 'Air Curtain',
        location: 'Terminal',
        sub_location: '0T41-E-04',
        cobie_tag: 'T2-L0-0T31-06-HVAC-DAC-003-001'
    },
    {
        equipment_tag: 'T2-L0-0T13-04-HVAC-DAC-004-001',
        type: 'Air Curtain',
        location: 'Terminal',
        sub_location: '0T12-E-01',
        cobie_tag: 'T2-L0-0T13-04-HVAC-DAC-003-001'
    },
    {
        equipment_tag: 'T2-L0-0TPA-02-HVAC-DAC-005-001',
        type: 'Air Curtain',
        location: 'Terminal',
        sub_location: '0T13-E-03',
        cobie_tag: ''
    },
    {
        equipment_tag: 'T2-L0-0TPA-02-HVAC-DAC-005-001',
        type: 'Air Curtain',
        location: 'Terminal',
        sub_location: '0T14-E-07',
        cobie_tag: 'T2-L0-0TPA-02-HVAC-DAC-003-001'
    },
    {
        equipment_tag: 'T2-L0-0TPA-02-HVAC-DAC-005-002',
        type: 'Air Curtain',
        location: 'Terminal',
        sub_location: '0T14-E-12',
        cobie_tag: ''
    },
    {
        equipment_tag: 'T2-L0-0TPA-02-HVAC-DAC-005-003',
        type: 'Air Curtain',
        location: 'Terminal',
        sub_location: '0T15-E-06',
        cobie_tag: ''
    },
    {
        equipment_tag: 'T2-L0-0TPA-02-HVAC-DAC-005-004',
        type: 'Air Curtain',
        location: 'Terminal',
        sub_location: '0T15-E-04',
        cobie_tag: ''
    },
    {
        equipment_tag: 'T2-L0-0T15-18-HVAC-DAC-004-001',
        type: 'Air Curtain',
        location: 'Terminal',
        sub_location: '0T15-E-01',
        cobie_tag: 'T2-L0-0T15-18-HVAC-DAC-003-001'
    },
    {
        equipment_tag: 'T2-L0-0T15-20-HVAC-DAC-005W1',
        type: 'Air Curtain',
        location: 'Terminal',
        sub_location: '0T15-E-07',
        cobie_tag: 'T2-L0-0T15-20-HVAC-DAC-003-001'
    },
    {
        equipment_tag: 'T2-L0-0TPA-04-HVAC-DAC-004-001',
        type: 'Air Curtain',
        location: 'Terminal',
        sub_location: '0T35-E-07',
        cobie_tag: 'T2-L0-0TPA-04-HVAC-DAC-003-001'
    },
    {
        equipment_tag: 'T2-L0-0TpA-04-HVAC-DAC-004-002',
        type: 'Air Curtain',
        location: 'Terminal',
        sub_location: '0T35-E-05',
        cobie_tag: 'T2-L0-0TPA-04-HVAC-DAC-003-002'
    },
    {
        equipment_tag: 'T2-L0-0T41-19-HVAC-DAC-004-002',
        type: 'Air Curtain',
        location: 'Terminal',
        sub_location: '0T41-E-06',
        cobie_tag: 'T2-L0-0T41-19-HVAC-DAC-003-002'
    },
    {
        equipment_tag: 'T2-L0-0T41-19-HVAC-DAC-004-002',
        type: 'Air Curtain',
        location: 'Terminal',
        sub_location: '0T41-E-07',
        cobie_tag: 'T2-L0-0T41-19-HVAC-DAC-003-001'
    },
    {
        equipment_tag: 'T2-L0-0T53-37B-HVAC-DAC-005-001',
        type: 'Air Curtain',
        location: 'Terminal',
        sub_location: '0T51-E-05',
        cobie_tag: 'T2-L0-0T53-37B-HVAC-DAC-003-001'
    },
    {
        equipment_tag: 'DT2-L0-0T53-37A-HVAC-DAC-005-001',
        type: 'Air Curtain',
        location: 'Terminal',
        sub_location: '0T51-E-04',
        cobie_tag: 'T2-L0-0T53-37A-HVAC-DAC-003-001'
    },
    {
        equipment_tag: 'T2-L0-0TPA-06-HVAC-DAC-004-004',
        type: 'Air Curtain',
        location: 'Terminal',
        sub_location: '0T73-E-13',
        cobie_tag: ''
    },
    {
        equipment_tag: 'T2-L0-0TpA-06-HVAC-DAC-004-003',
        type: 'Air Curtain',
        location: 'Terminal',
        sub_location: '0T73-E-12',
        cobie_tag: 'T2-L0-0TPA-06-HVAC-DAC-003-003'
    },
    {
        equipment_tag: 'T2-L0-0TPA-06-HVAC-DAC-004-002',
        type: 'Air Curtain',
        location: 'Terminal',
        sub_location: '0173-E-11',
        cobie_tag: 'T2-L0-0TPA-06-HVAC-DAC-003-002'
    },
    {
        equipment_tag: 'T2-L0-0TPA-06-HVAC-DAC-004-001',
        type: 'Air Curtain',
        location: 'Terminal',
        sub_location: '0T73-E-10',
        cobie_tag: 'T2-L0-0TPA-06-HVAC-DAC-003-001'
    },
    {
        equipment_tag: 'T2-L0-0T53-37C-HVAC-DAC-001-001',
        type: 'Air Curtain',
        location: 'Terminal',
        sub_location: '0T53-E-04',
        cobie_tag: 'T2-L0-0T53-37C-HVAC-DAC-001-001'
    },
    {
        equipment_tag: 'T2-L0-0T53-24-HVAC-DAC-005-001',
        type: 'Air Curtain',
        location: 'Terminal',
        sub_location: '0T53-26A',
        cobie_tag: 'T2-L0-0T53-24-HVAC-DAC-003-001'
    },
    {
        equipment_tag: 'T2-L0-0T53-37E-HVAC-DAC-001-001',
        type: 'Air Curtain',
        location: 'Terminal',
        sub_location: '0T54-E-01',
        cobie_tag: 'T2-L0-0T53-37E-HVAC-DAC-001-001'
    },
    {
        equipment_tag: 'T2-L0-0T55-01-HVAC-DAC-005-001',
        type: 'Air Curtain',
        location: 'Terminal',
        sub_location: '0155-E-03',
        cobie_tag: 'T2-L0-0T55-01-HVAC-DAC-003-001'
    },
    {
        equipment_tag: 'T2-L0-0T53-37E-HVAC-DAC-005-001',
        type: 'Air Curtain',
        location: 'Terminal',
        sub_location: '0T55-02A',
        cobie_tag: ''
    },
    {
        equipment_tag: 'T2-L0-0T53-37E-HVAC-DAC-004-001',
        type: 'Air Curtain',
        location: 'Terminal',
        sub_location: '0T55-E-01',
        cobie_tag: 'T2-L0-0T53-37E-HVAC-DAC-003-001'
    },
    {
        equipment_tag: 'T2-L0-0TPA-07-1-HVAC-DAC-005-001',
        type: 'Air Curtain',
        location: 'Terminal',
        sub_location: '0T78-E-03',
        cobie_tag: ''
    },
    {
        equipment_tag: 'T2-L0-0TPA-07-1-HVAC-DAC-005-002',
        type: 'Air Curtain',
        location: 'Terminal',
        sub_location: 'W78-E-02',
        cobie_tag: ''
    },
    {
        equipment_tag: 'T2-L0-0TPA-07-1-HVAC-DAC-005-003',
        type: 'Air Curtain',
        location: 'Terminal',
        sub_location: '0T78-E-01',
        cobie_tag: ''
    },
    {
        equipment_tag: 'T2-L0-0TPA47-1-HVAC-DAC-004-001',
        type: 'Air Curtain',
        location: 'Terminal',
        sub_location: '0T78-E-05',
        cobie_tag: ''
    },
    {
        equipment_tag: 'T2-L0-0TPA47-1-HVAC-DAC-004-002',
        type: 'Air Curtain',
        location: 'Terminal',
        sub_location: '0T78-E-06',
        cobie_tag: ''
    },
    {
        equipment_tag: 'T2-L0-0TPA-07-1-HVAC-DAC-004-003',
        type: 'Air Curtain',
        location: 'Terminal',
        sub_location: '0T77-E-01',
        cobie_tag: ''
    },
    {
        equipment_tag: 'T2-L0-0TPA-07-1-HVAC-DAC-004-004',
        type: 'Air Curtain',
        location: 'Terminal',
        sub_location: '0T77-E-02',
        cobie_tag: ''
    },
    {
        equipment_tag: 'T2-L0-0TPA-07-1-HVAC-DAC-004-005',
        type: 'Air Curtain',
        location: 'Terminal',
        sub_location: '0T77-E-03',
        cobie_tag: ''
    },
    {
        equipment_tag: 'T2-L0-0TPA-07-1-HVAC-DAC-004-006',
        type: 'Air Curtain',
        location: 'Terminal',
        sub_location: '0T77-E-04',
        cobie_tag: ''
    },
    {
        equipment_tag: 'T2-L0-0TPA-07-1-HVAC-DAC-004-007',
        type: 'Air Curtain',
        location: 'Terminal',
        sub_location: '0T77-E-05',
        cobie_tag: ''
    },
    {
        equipment_tag: 'T2-L0-0TPA-07-1-HVAC-DAC-004-008',
        type: 'Air Curtain',
        location: 'Terminal',
        sub_location: '0T77-E-06',
        cobie_tag: ''
    },
    {
        equipment_tag: 'T2-L0-0TPA-07-1-HVAC-DAC-004-009',
        type: 'Air Curtain',
        location: 'Terminal',
        sub_location: '0176-E-01',
        cobie_tag: ''
    },
    {
        equipment_tag: 'T2-L0-0TPA-07-1-HVAC-DAC-004-0010',
        type: 'Air Curtain',
        location: 'Terminal',
        sub_location: '0T76-E-02',
        cobie_tag: ''
    },
    {
        equipment_tag: 'T2-L0-0TPA-07-2-HVAC-DAC-004-001',
        type: 'Air Curtain',
        location: 'Terminal',
        sub_location: '0T76-E-05',
        cobie_tag: ''
    },
    {
        equipment_tag: 'T2-L0-0TPA-07-2-HVAC-DAC-004-002',
        type: 'Air Curtain',
        location: 'Terminal',
        sub_location: '0T76-E-06',
        cobie_tag: ''
    },
    {
        equipment_tag: 'T2-L3-3TPA-02-HVAC-DAC-005-001',
        type: 'Air Curtain',
        location: 'Terminal',
        sub_location: '3T12-E-02',
        cobie_tag: ''
    },
    {
        equipment_tag: 'T2-L3-3TPA-02-HVAC-DAC-005-002',
        type: 'Air Curtain',
        location: 'Terminal',
        sub_location: '3T13-E-10',
        cobie_tag: ''
    },
    {
        equipment_tag: 'T2-L3-3TPA-02-HVAC-DAC-005-003',
        type: 'Air Curtain',
        location: 'Terminal',
        sub_location: '3T13-E-08',
        cobie_tag: ''
    },
    {
        equipment_tag: 'T2-L3-3TPA-02+T2AC-DAC-005-004',
        type: 'Air Curtain',
        location: 'Terminal',
        sub_location: '3T13-E-06',
        cobie_tag: ''
    },
    {
        equipment_tag: 'T2-L3-3TPA-02-HVAC-DAC-005-005',
        type: 'Air Curtain',
        location: 'Terminal',
        sub_location: '3T13-E-04',
        cobie_tag: ''
    },
    {
        equipment_tag: 'T2-L3-3TPA-02-HVAC-DAC-005-006',
        type: 'Air Curtain',
        location: 'Terminal',
        sub_location: '3T13-E-02',
        cobie_tag: ''
    },
    {
        equipment_tag: 'T2-L3-3TPA-02-HVAC-DAC-005-007',
        type: 'Air Curtain',
        location: 'Terminal',
        sub_location: '3T14-E-06',
        cobie_tag: ''
    },
    {
        equipment_tag: 'T2-L3-3TPA-02-HVAC-DAC-005-008',
        type: 'Air Curtain',
        location: 'Terminal',
        sub_location: '3T14-E-04',
        cobie_tag: ''
    },
    {
        equipment_tag: 'T2-L3-3TPA-02-HVAC-DAC-005-009',
        type: 'Air Curtain',
        location: 'Terminal',
        sub_location: '3T14-E-02',
        cobie_tag: ''
    },
    {
        equipment_tag: 'T2-L3-3TPA-02-HVAC-DAC-004-001',
        type: 'Air Curtain',
        location: 'Terminal',
        sub_location: '3T25-E-01',
        cobie_tag: ''
    },
    {
        equipment_tag: 'T2-L3-3TPA-05E-HVAC-DAC-004-001',
        type: 'Air Curtain',
        location: 'Terminal',
        sub_location: '3T42-E-01',
        cobie_tag: 'T2-L3-3TPA-05E-HVAC-DAC-003-001'
    },
    {
        equipment_tag: 'T2-L3-3T52-06-HVAC-DAC-002-001',
        type: 'Air Curtain',
        location: 'Terminal',
        sub_location: '3T51-E-01',
        cobie_tag: 'T2-L3-3T52-06-HVAC-DAC-002-001'
    },
    {
        equipment_tag: 'T2-L3-3T52-06-HVAC-DAC-002-002',
        type: 'Air Curtain',
        location: 'Terminal',
        sub_location: '3T51-E-01',
        cobie_tag: 'T2-L3-3T52-06-HVAC-DAC-002-002'
    },
    {
        equipment_tag: 'T2-L3-3T52-06-HVAC-DAC-002-003',
        type: 'Air Curtain',
        location: 'Terminal',
        sub_location: '3152-E-02',
        cobie_tag: 'T2-L3-3T52-06-HVAC-DAC-001-001'
    },
    {
        equipment_tag: 'T2-L3-3T52-06-HVAC-DAC-002-004',
        type: 'Air Curtain',
        location: 'Terminal',
        sub_location: '3152-E-02',
        cobie_tag: 'T2-L3-3T52-06-HVAC-DAC-001-002'
    },
    {
        equipment_tag: 'T2-L3-3T62-04-HVAC-DAC-002-003',
        type: 'Air Curtain',
        location: 'Terminal',
        sub_location: '3T62-E-02',
        cobie_tag: 'T2-L3-3T62-04-HVAC-DAC-001-001'
    },
    {
        equipment_tag: 'T2-L3-3T62-04-HVAC-DAC-002-004',
        type: 'Air Curtain',
        location: 'Terminal',
        sub_location: '3T62-E-02',
        cobie_tag: 'T2-L3-3T62-04-HVAC-DAC-001-002'
    },
    {
        equipment_tag: 'T2-L3-3T62-04-HVAC-DAC-002-001',
        type: 'Air Curtain',
        location: 'Terminal',
        sub_location: '3T61-E-01',
        cobie_tag: 'T2-L3-3T62-04-HVAC-DAC-002-001'
    },
    {
        equipment_tag: 'T2-L3-3T62-04-HVAC-DAC-002-002',
        type: 'Air Curtain',
        location: 'Terminal',
        sub_location: '3T61-E-01',
        cobie_tag: 'T2-L3-3T62-04-HVAC-DAC-002-002'
    },
    {
        equipment_tag: 'T2-L3-3TPA-07-5-HVAC-DAC-005-001',
        type: 'Air Curtain',
        location: 'Terminal',
        sub_location: '3TPA-07-A',
        cobie_tag: 'T2-L3-3TPA-07-HVAC-DAC-003-002'
    },
    {
        equipment_tag: 'T2-L3-3TPA-07-6-HVAC-DAC-005-001',
        type: 'Air Curtain',
        location: 'Terminal',
        sub_location: '3TPA-07-B',
        cobie_tag: 'T2-L3-3TPA-07-HVAC-DAC-003-001'
    },
    {
        equipment_tag: 'T2-L3-3TPA-05A-HVAC-DAC-005-001',
        type: 'Air Curtain',
        location: 'Terminal',
        sub_location: '3TPA-05-A',
        cobie_tag: 'T2-L3-3TPA-05A-HVAC-DAC-003-001'
    },
    {
        equipment_tag: 'T2-L3-3TPA-05A-HVAC-DAC-005-002',
        type: 'Air Curtain',
        location: 'Terminal',
        sub_location: '3TPA-05-B',
        cobie_tag: 'T2-L3-3TPA-05A-HVAC-DAC-003-002'
    },
    {
        equipment_tag: 'T2-L4-3TPA-05A-HVAC-DAC-005-001',
        type: 'Air Curtain',
        location: 'Terminal',
        sub_location: '4TPA-01-A',
        cobie_tag: ''
    },
    {
        equipment_tag: 'T2-L4-4T64-06-HVAC-DAC-005-001',
        type: 'Air Curtain',
        location: 'Terminal',
        sub_location: '4T74-E-01',
        cobie_tag: 'T2-L4-4T64-06-HVAC-DAC-003-001'
    },
    {
        equipment_tag: 'T2-L4-4T75-08C-HVAC-DAC-005-001',
        type: 'Air Curtain',
        location: 'Terminal',
        sub_location: '4T74-E-02',
        cobie_tag: 'T2-L4-4T75-08C-HVAC-DAC-003-001'
    },
    {
        equipment_tag: 'GPV-RES-PA-20-HVAC-DAC-001-001',
        type: 'Air Curtain',
        location: '',
        sub_location: 'GPV',
        cobie_tag: ''
    },
    {
        equipment_tag: 'GP-LB-PA-04-HVAC-EAF-003-001',
        type: 'Exhaust Fan',
        location: '',
        sub_location: 'ELECTRICAL ROOM',
        cobie_tag: ''
    },
    {
        equipment_tag: 'GP-LB-PA-04-HVAC-EAF-003-001',
        type: 'Exhaust Fan',
        location: '',
        sub_location: 'ELECTRICAL ROOM',
        cobie_tag: ''
    },
    {
        equipment_tag: 'GPV-LB-PA-06-HVAC-EAF-004-001',
        type: 'Exhaust Fan',
        location: '',
        sub_location: 'BATTERY ROOM',
        cobie_tag: ''
    },
    {
        equipment_tag: 'GPV-LB-PC-05-HVAC-EAF-003-001',
        type: 'Exhaust Fan',
        location: '',
        sub_location: 'ELECTRICAL ROOM',
        cobie_tag: ''
    },
    {
        equipment_tag: 'GPV-LB-PC-05-HVAC-EAF-003-002',
        type: 'Exhaust Fan',
        location: '',
        sub_location: 'ELECTRICAL ROOM',
        cobie_tag: ''
    },
    {
        equipment_tag: 'GPV-LB-PC-07-HVAC-EAF-004-001',
        type: 'Exhaust Fan',
        location: '',
        sub_location: 'BATTERY ROOM',
        cobie_tag: ''
    },
    {
        equipment_tag: 'GPV-BOH-PA-P7-HVAC-EAF-001-001',
        type: 'Exhaust Fan',
        location: '',
        sub_location: 'Toilet Exhaust',
        cobie_tag: ''
    },
    {
        equipment_tag: 'GPV-ENT-PC-11-HVAC-EAF-001-001',
        type: 'Exhaust Fan',
        location: '',
        sub_location: 'Toilet Exhaust',
        cobie_tag: ''
    },
    {
        equipment_tag: 'GPV-BOH-PA-09-HVAC-EAF-002-001',
        type: 'Exhaust Fan',
        location: '',
        sub_location: 'Pantry exhaust',
        cobie_tag: ''
    },
    {
        equipment_tag: 'GPV-BOH-PA-07-HVAC-SEF-001-001',
        type: 'Exhaust Fan',
        location: '',
        sub_location: 'Restaurant smoke Exhaust',
        cobie_tag: ''
    },
    {
        equipment_tag: 'GPV--LB-PC-04-HVAC-FAF-001-001',
        type: 'Fresh Air Fan',
        location: '',
        sub_location: 'Pressurization ',
        cobie_tag: ''
    },
    {
        equipment_tag: 'GPV-BOH-PA-07-HVAC-FAF-001-001',
        type: 'Fresh Air Fan',
        location: '',
        sub_location: 'Lift Pressurisation',
        cobie_tag: ''
    },
    {
        equipment_tag: 'GPV-LB-PA-06-HVAC-CAS-001-001',
        type: 'Dx Cassette',
        location: '',
        sub_location: 'Battery Room',
        cobie_tag: ''
    },
    {
        equipment_tag: 'GPV-LB-PA-05-HVAC-CAS-001-001',
        type: 'Dx Cassette',
        location: '',
        sub_location: 'UPS room',
        cobie_tag: ''
    },
    {
        equipment_tag: 'GPV-LB-PA-05-HVAC-CAS-001-002',
        type: 'Dx Cassette',
        location: '',
        sub_location: 'UPS room',
        cobie_tag: ''
    },
    {
        equipment_tag: 'GPV-LB-PC-06-HVAC-CAS-001-001',
        type: 'Dx Cassette',
        location: '',
        sub_location: 'UPS room',
        cobie_tag: ''
    },
    {
        equipment_tag: 'GPV-LB-PC-07-HVAC-CAS-001-001',
        type: 'Dx Cassette',
        location: '',
        sub_location: 'Battery Room',
        cobie_tag: ''
    },
    {
        equipment_tag: 'GPV-LB-PC-06-HVAC-CAS-001-002',
        type: 'Dx Cassette',
        location: '',
        sub_location: 'UPS room',
        cobie_tag: ''
    },
    {
        equipment_tag: 'EGH-L0-0E-01-HVAC-DXUI-0001-001',
        type: 'Dx Cassette',
        location: '',
        sub_location: 'Queuing area OE-01',
        cobie_tag: 'EGH-L0-0E-01-HVAC-DXUI-001-001'
    },
    {
        equipment_tag: 'EGH-L0-0E-01-HVAC-DXUI-0001-002',
        type: 'Dx Cassette',
        location: '',
        sub_location: 'Queuing area OE-01',
        cobie_tag: 'EGH-L0-0E-01-HVAC-DXUI-001-002'
    },
    {
        equipment_tag: 'EGH-L0-0E-02-HVAC-DXUI-001-001',
        type: 'Dx Cassette',
        location: '',
        sub_location: 'Frisking Area OE-02',
        cobie_tag: 'EGH-L0-0E-02-HVAC-DXUI-001-001'
    },
    {
        equipment_tag: 'EGH-L0-0E-02-HVAC-DXUI-001-002',
        type: 'Dx Cassette',
        location: '',
        sub_location: 'Frisking Area OE-02',
        cobie_tag: 'EGH-L0-0E-02-HVAC-DXUI-001-002'
    },
    {
        equipment_tag: 'EGH-L0-0E-02-HVAC-DXUI-001-003',
        type: 'Dx Cassette',
        location: '',
        sub_location: 'Frisking Area OE-02',
        cobie_tag: 'EGH-L0-0E-02-HVAC-DXUI-001-003'
    },
    {
        equipment_tag: 'EGH-L0-0E-04-HVAC-DXUI-001-001',
        type: 'Dx Cassette',
        location: '',
        sub_location: 'Pass / Permit Area OE-04',
        cobie_tag: 'EGH-L0-0E-04-HVAC-DXUI-003-001'
    },
    {
        equipment_tag: 'EGH-L0-0E-05-HVAC-DXUI-002-001',
        type: 'Dx Cassette',
        location: '',
        sub_location: 'IT Room OE-05',
        cobie_tag: 'EGH-L0-0E-05-HVAC-DXUI-002-001'
    },
    {
        equipment_tag: 'EGH-L0-0E-05-HVAC-DXUI-002-002',
        type: 'Dx Cassette',
        location: '',
        sub_location: 'IT Room OE-05',
        cobie_tag: 'EGH-L0-0E-05-HVAC-DXUI-003-001'
    },
    {
        equipment_tag: 'EGH-L0-0E-06-HVAC-DXUI-001-001',
        type: 'Dx Cassette',
        location: '',
        sub_location: 'CISF Room 1 OE-06',
        cobie_tag: 'EGH-L0-0E-06-HVAC-DXUI-002-001'
    },
    {
        equipment_tag: 'EGH-L0-0E-02-HVAC-DXUI-001-004',
        type: 'Dx Cassette',
        location: '',
        sub_location: 'Frisking Area OE-02',
        cobie_tag: 'EGH-L0-0E-02-HVAC-DXUI-001-004'
    },
    {
        equipment_tag: 'EGH-L0-0E-10-HVAC-DXUI-001-001',
        type: 'Dx Cassette',
        location: '',
        sub_location: 'CISF Room 2 OE-10',
        cobie_tag: 'EGH-L0-0E-10-HVAC-DXUI-002-001'
    },
    {
        equipment_tag: 'EGH-L0-0E-07-HVAC-FAF-001',
        type: 'Fresh Air Fan',
        location: '',
        sub_location: 'All areas - Outdoor air supply',
        cobie_tag: 'EGH-L0-0E-07-HVAC-EAF-001-001'
    },
    {
        equipment_tag: 'EGH-L0-0E-07-HVAC-EAF-001',
        type: 'Exhaust Fan',
        location: '',
        sub_location: 'Pantry',
        cobie_tag: 'EGH-L0-0E-07-HVAC-FAF-001-001'
    },
    {
        equipment_tag: 'EGH-L0-0E-08-HVAC-EAF-002',
        type: 'Exhaust Fan',
        location: '',
        sub_location: 'Toilet',
        cobie_tag: 'EGH-L0-0E-08-HVAC-EAF-002-001'
    },
    {
        equipment_tag: 'EGH-L0-0E-09-HVAC-EAF-003',
        type: 'Exhaust Fan',
        location: '',
        sub_location: 'Toilet',
        cobie_tag: 'EGH-L0-0E-09-HVAC-EAF-003-001'
    },
    {
        equipment_tag: 'EGH-L0-0E-09-HVAC-EAF-003',
        type: 'Exhaust Fan',
        location: '',
        sub_location: 'Toilet',
        cobie_tag: 'EGH-L0-0E-09-HVAC-EAF-004-001'
    }
];

module.exports = { newEquipmentTags };
