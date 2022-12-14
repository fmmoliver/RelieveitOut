import { OnInit, EventEmitter } from '@angular/core';
import * as ɵngcc0 from '@angular/core';
export declare class GenericListFilterComponent implements OnInit {
    list: any;
    paramList: any;
    onFilterChange: EventEmitter<any>;
    filterKeys1: any;
    selectedFilterTabType1: any;
    selectedValues: any[];
    selectedCategory: {
        type: string;
        value: string;
    };
    filters: any;
    listCopy: any;
    filterKeys: any;
    isFiltersApplied: boolean;
    openFilterBar: boolean;
    timeFilter: boolean;
    allAppliedFilters: any;
    fromTime: any;
    toTime: any;
    searchKey: string;
    isCountClicked: boolean;
    isData: boolean;
    isStatus: boolean;
    step: any;
    category: any;
    constructor();
    ngOnInit(): void;
    ngOnChanges(): void;
    openFilterSideBar(): void;
    onCancel(): void;
    onRemoveFilter(item: any): void;
    applyFilters(): void;
    setTime(type: string, event: any): void;
    filterChange(): void;
    openRestAppliedFilters(): void;
    selectedFilterTab(type: any): void;
    isFilterExists(filter: any): boolean;
    selectFilter(item: any, type: any): void;
    resetAllFilters(): void;
    filterData(searchValue?: any): void;
    static ɵfac: ɵngcc0.ɵɵFactoryDeclaration<GenericListFilterComponent, never>;
    static ɵcmp: ɵngcc0.ɵɵComponentDeclaration<GenericListFilterComponent, "app-filter", never, { "list": "list"; "paramList": "paramList"; }, { "onFilterChange": "onFilterChange"; }, never, never>;
}

//# sourceMappingURL=generic-list-filter.component.d.ts.map