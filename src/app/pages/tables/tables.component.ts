import { Component, OnInit } from '@angular/core';
import {User} from '../../User';
import {Role} from '../../role';
import {AuthService} from '../../_services/auth.service';
import {Router} from '@angular/router';
import {NgbModal, NgbModalConfig} from '@ng-bootstrap/ng-bootstrap';
import {EditUsersComponent} from '../edit-users/edit-users.component';
import {PaginationService} from '../../_services/pagination.service';

@Component({
  selector: 'app-tables',
  templateUrl: './tables.component.html',
  styleUrls: ['./tables.component.scss']
})
export class TablesComponent implements OnInit {
  // displayedColumns: string[] = ['username', 'email', 'role', 'tel'];
  // dataSource: MatTableDataSource<User> = new MatTableDataSource<User>();
  // @ViewChild(MatPaginator, {static: true}) paginator: MatPaginator;
  // @ViewChild(MatSort, {static: true}) sort: MatSort;
  users: User[] = [];
  user: User;
  roles: Role[] = [];
  // roles: Observable<Role[]>;
  data: any;
  message: any;
  selectedUser: User;
  Articles: any;
  p:number=1;
  /*page = 1;
  count = 0;
  tableSize = 8;
  tableSizesArr = [4, 8, 12];*/
  constructor(private userService: AuthService, private router: Router, config: NgbModalConfig,
              private modalService: NgbModal, private paginationService: PaginationService) {
  }
  ngOnInit() {
    this.reloadData();
    // this.showData();
  }
  reloadData() {
    // this.users = this.userService.getEmployeesList();
    this.userService.getEmployeesList().subscribe(
      res => {
        this.users = res;
        // this.dataSource.data = this.users;
        // this.dataSource.paginator = this.paginator;
        // this.dataSource.sort = this.sort;
      },
      err => console.log(err)
    );
  }
  /* editUser(user: User): void {
     window.localStorage.removeItem('editUserId');
     window.localStorage.setItem('editUserId', user.id.toString());
     this.router.navigate(['edit-user']);
   }*/
  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    // this.dataSource.filter = filterValue.trim().toLowerCase();
    //
    // if (this.dataSource.paginator) {
    //   this.dataSource.paginator.firstPage();
    // }
  }
  // editUser(id: number): void {
  //   console.log(id);
  //   this.userService.getUserById(id).subscribe(res => {
  //       this.data = res ;
  //     },
  //     error => console.log(error),
  //     () => {
  //       console.log(this.data);
  //       this.userService.currentMessage.subscribe(message => {this.data = message; },
  //         error => { console.log(error); },
  //         () => { }
  //       );
  //     });
  //   const dialogRef = this.dialog.open(EditUserComponent, {
  //       data: id,
  //       minWidth: '600px',
  //       height: '800px'
  //     },
  //   );
  //   dialogRef.afterClosed().subscribe(result => {
  //     console.log(`Dialog result: ${result}`);
  //     this.reloadData();
  //   });
  //   // this.router.navigate(['user-profile']);
  // }
  // register(): void {
  //   const dialogRef = this.dialog.open(RegisterComponent, {
  //       minWidth: '600px',
  //       height: '800px'
  //     },
  //   );
  //   // dialogRef.disableClose = true;
  //   dialogRef.afterClosed().subscribe(result => {
  //     console.log(`Dialog result: ${result}`);
  //     this.reloadData();
  //   });
  //   // this.router.navigate(['register']);
  // }
  deleteUser(user: User): void {
    this.userService.deleteUser(user.id)
      .subscribe( data => {
        this.users = this.users.filter(u => u !== user);
      });
  }
  supprimeUser($event) {
      console.log($event);
    this.selectedUser = $event;
  }
  gotoList() {
    this.router.navigate(['/tables']);
  }
  getRole(role: string) {
    const name = role.substring(role.indexOf('_') + 1, role.length);
    return name;
    console.log(name);
  }
  // editTicket(id: number): void {
  //   console.log(id);
  //   this.userService.getUserById(id).subscribe(res => {
  //       this.data = res;
  //     },
  //     error => console.log(error),
  //     () => {
  //       console.log(this.data);
  //       this.userService.currentMessage.subscribe(message => {
  //           this.data = message;
  //         },
  //         error => {
  //           console.log(error);
  //         },
  //         () => {
  //         }
  //       );
  //     });
  //   this.router.navigate(['/edit-users']);
  // }
  // gotoupdate() {
  //   console.log(this.selectedUser.id);
  //   // this.router.navigate(['/edit-users']);
  // }
  updateDomain(id: number) {
    console.log(id);
    this.router.navigate(['edit-users']);
  }
  gotoajout() {
    this.router.navigate(['ajout-users']);
  }
  editUser(id: number): void {
    console.log(id);
    this.userService.getUserById(id).subscribe(res => {
        this.data = res ;
      },
      error => console.log(error),
      () => {
        console.log(this.data);
        this.userService.currentMessage.subscribe(message => {this.data = message; },
          error => { console.log(error); },
          () => { }
        );
      });
    const dialogRef = this.modalService.open(EditUsersComponent);
  }
  /*showData(): void {
    this.paginationService.fetchPosts()
      .subscribe(
        res => {
          this.Articles = res;
          console.log(res);
        },
        err => {
          console.log(err);
        });
  }

  tabSize(event) {
    this.page = event;
    this.showData();
  }
  tableData(event): void {
    this.tableSize = event.target.value;
    this.page = 1;
    this.showData();
  }*/

}
