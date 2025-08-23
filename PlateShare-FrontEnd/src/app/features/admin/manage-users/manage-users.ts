import {ChangeDetectorRef, Component, EventEmitter, OnInit, Output} from '@angular/core';
import {Router, RouterLink} from '@angular/router';
import {Utilisateur} from '../../../core/models/utilisateur';
import {UserService} from '../../../core/services/user/user';
import {CommonModule, NgForOf} from '@angular/common';
import {AuthService} from '../../../core/services/auth/AuthService';

@Component({
  selector: 'app-manage-users',
  imports: [
    RouterLink,
    NgForOf,
    CommonModule
  ],
  templateUrl: './manage-users.html',
  styleUrl: './manage-users.css'
})
export class ManageUsers implements OnInit{

  @Output() deleted =new EventEmitter<number>();

  users:Utilisateur[]=[];
  isLoading: boolean = true;
  error:string | null=null;


  constructor(private userService: UserService,
              private cdr: ChangeDetectorRef,
              private authService: AuthService,
              private route: Router
  ){}

  ngOnInit(): void {
    this.loadUsers();
  }

  onDelete(id: number){
    if (confirm('Are you sure you want to delete this user?')) {
      this.userService.deleteUser(id).subscribe(() => {
      alert("User deleteed !!");
      this.deleted.emit(id);
      })
    }
  }

  private loadUsers():void{
    this.userService.getAllUsers().subscribe({
      next:(data)=>{
        this.users=data;
        this.isLoading=false;
        console.log("data of useeers : ", data);
        this.cdr.detectChanges();
    },
      error: (err) => {
        console.error("faailed  load users:", err);
        this.error = "not load the list of users";
        this.isLoading = false;
        this.cdr.detectChanges();
      }

    })
  }

  logout(){
    this.authService.logout();
    this.route.navigate(['/login'])
  }

}
